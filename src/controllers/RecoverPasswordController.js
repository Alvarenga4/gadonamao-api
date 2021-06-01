const User = require('../models/User');
const RecoverPassword = require('../models/RecoverPassword');
const GenerateToken = require('../helpers/GenerateToken');
const EmailService = require('../services/EmailService');
const differenceInHours = require('date-fns/differenceInHours');
const bcrypt = require('bcryptjs');

module.exports = {
  async store (req, res) {
    try {
      const { email } = req.body;
      const user = await User.findOne({
        email
      });

      if (!user) {
        return res.status(404).send({ message: 'Email não cadastro' });
      }

      const token = GenerateToken();
      const recoverPassword = await RecoverPassword.findOneAndUpdate(
        { user: user._id },
        {
          token,
          updatedAt: new Date()
        }
      );

      if (!recoverPassword) {
        await RecoverPassword.create({
          user: user._id,
          token
        });
      }

      const link = `${process.env.APP_URL}/alterarsenha/${token}`;
      const output = `
        <div style="background-color: #fff; color: #2b2b2b;">
          <h2>
            <strong>
              SOLICITAÇÃO DE ALTERAÇÃO DE SENHA
            </strong>
          </h2>
          <h4>Saudações ${user.fullName}!</h4>

          <p>Recebemos sua solicitação para alteração da senha.</p>

          <p>
          Acesse o link abaixo.<br />
          <a href="${link}" target="_blank">${link}</a>
          </p>

          <p>Caso não tenha solicitado a alteração de senha, por favor desconsidere esse email</p>

          <p>Atenciosamente,</p>

          <p>ADM gadonamao.com.br</p>
        </div>
      `;

      await EmailService({
        from: 'contato@gadonamao.com.br',
        to: email,
        subject: 'E-MAIL DE SOLICITAÇÃO DE ALTERAÇÃO DE SENHA',
        output,
        error: ({ error }) => {
          return res.status(401).send({
            message:
              'Não foi possível enviar o email. Por favor entre em contato com suporte',
            error
          });
        },
        success: () => {
          return res.send({
            message: 'Email enviado com sucesso'
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).send(error);
    }
  },

  async update (req, res) {
    try {
      const { token } = req.params;
      const recoverPassword = await RecoverPassword.findOne({
        token
      });

      if (!recoverPassword) {
        return res.status(401).send({ message: 'Nenhuma solicitação para alterar senha encontrada para esse usuário' });
      }

      if (differenceInHours(new Date(), recoverPassword.updatedAt) >= 2) {
        return res.status(401).send({ message: 'Token expirado. Por favor solicite outra alteração de senha' });
      }

      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      await User.findOneAndUpdate({ _id: recoverPassword.user }, {
        password: passwordHash
      });

      await RecoverPassword.deleteOne({ _id: recoverPassword._id });

      res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).send(error);
    }
  }
};

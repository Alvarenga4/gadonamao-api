const User = require('../models/User');
const mongoose = require('mongoose');
const EmailService = require('../services/EmailService');

module.exports = {
  async index (req, res) {
    const data = await User.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Usuário inválido'
      });
    }

    const data = await User.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { email } = req.body;
      const { filename } = req.file;

      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: 'Email já cadastrado' });
      }

      const data = await User.create({
        ...req.body,
        image: filename,
        approved: false
      });

      /* const output = `
      <div style="background-color: #fff; color: #2b2b2b;">
        <h2>
          <strong>
            CONFIRMAÇÃO DE CADASTRO
          </strong>
        </h2>
        <h4>Bem-Vindo ${name}!</h4>
        <p>Recebemos seus dados cadastrais e enviamos para análise. Em breve, você receberá um outro e-mail informando sobre o status de seu cadastro.</p>

        <p>Caso não receba o e-mail de resposta em até 48 horas, por favor entre em contato através do e-mail contato@gadonamao.com.br</p>

        <p>Atenciosamente,</p>

        <p>ADM gadonamao.com.br</p>
      </div>
    `;

      await EmailService({
        from: 'contato@gadonamao.com.br',
        to: email,
        subject: 'E-MAIL DE CONFIRMAÇÃO DE CADASTRO',
        output,
        error: ({ error }) => {
          return res.send({
            message: 'Usuário cadastrado com sucesso, mas não foi possível enviar um email',
            error
          });
        },
        success: () => {
          return res.send(data);
        }
      }); */
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message:
          'Falha no servidor!!! Não foi possivel processar a requisição.',
        error
      });
    }
  },

  async update (req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Usuário inválido'
        });
      }

      const user = await User.findById(id);

      const data = await User.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });

      if (data.approved && data.approved !== user.approved) {
        // send email
        const output = `
          <div style="background-color: #fff; color: #2b2b2b;">
            <h2>
              <strong>
                S.: F.: U.:
              </strong>
            </h2>
            <h4>Ir.: ${user.name}!</h4>

            <p>Desenvolvemos essa plataforma com o intuito de incentivar e fomentar negócios entre Irmãos, ainda mais nesse período pandêmico que vivemos.</p>

            <p>Esperamos que faça bom aproveito de nossas soluções e que elas o auxiliem verdadeiramente.</p>

            <p>Façamos bons negócios, de maneira Justa e Perfeita!</p>

            <p>Informamos ainda que esse portal é destinado exclusivamente a membros da Maçonaria, não sendo permitido não membros.</p>

            <p>Para o crescimento da nossa comunidade, além do cadastro, contamos com a divulgação dos Irmãos. </p>

            <p>Por favor, envie nosso link (www.gadonamao.com.br) para os grupos de sua Loja Maçônica e/ou divulgue para mais Irmãos.</p>

            <p>Qualquer dúvida ou sugestão, por favor, contate-nos através do e-mail contato@gadonamao.com.br .</p>

            <p>T.: F.: A.:</p>

            <p>Atenciosamente,</p>

            <p>ADM gadonamao.com.br</p>

          </div>
        `;

        await EmailService({
          from: 'contato@gadonamao.com.br',
          to: user.email,
          subject: 'E-MAIL DE BOAS VINDAS!',
          output,
          error: ({ error }) => {
            return res.send({
              message:
                'Usuário aprovado com sucesso, mas não foi possível enviar um email',
              error
            });
          },
          success: () => {
            return res.send(data);
          }
        });
      } else if (!data.approved && data.approved !== user.approved) {
        // send email
        const output = `
          <div style="background-color: #fff; color: #2b2b2b;">
            <h4>Olá ${user.name}!</h4>

            <p>Seu cadastro não atendeu aos critérios e após nossa análise não foi aprovado. Informamos ainda que esse portal é destinado exclusivamente a membros da Maçonaria, não sendo permitido não membros.</p>

            <p>Caso seja membro da Maçonaria e tenha fornecido os dados corretamente, por favor entre em contato através do e-mail contato@gadonamao.com.br que ficaremos felizes em atendê-lo.</p>

            <p>Atenciosamente,</p>

            <p>ADM gadonamao.com.br</p>

          </div>
        `;

        await EmailService({
          from: 'contato@gadonamao.com.br',
          to: user.email,
          subject: 'E-MAIL DE RECUSA',
          output,
          error: ({ error }) => {
            return res.send({
              message:
                'Usuário reprovado com sucesso, mas não foi possível enviar um email',
              error
            });
          },
          success: () => {
            return res.send(data);
          }
        });
      } else {
        return res.send(data);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message:
          'Falha no servidor!!! Não foi possivel processar a requisição.',
        error
      });
    }
  },

  async delete (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Usuário inválido'
      });
    }

    await User.deleteOne({ _id: id });

    return res.json({ message: 'Usuário excluido com sucesso' });
  }
};

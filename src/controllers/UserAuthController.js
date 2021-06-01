const User = require('../models/User');
const Token = require('../models/Token');

module.exports = {
  async authenticate (req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        email
      });

      if (!user) {
        return res.status(404).json({
          message: 'Usuário não encontrado'
        });
      }

      if (!user.approved) {
        return res.status(401).send({ message: 'Seu cadastrado ainda não foi aprovado' });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ message: 'Senha Inválida' });
      }

      const token = user.generateToken();

      // await Token.findOneAndDelete({ user: user._id });

      await Token.create({
        user: user._id,
        token,
        type: 'user'
      });

      return res.json({
        user,
        token
      });
    } catch (error) {
      return res.status(500).json({
        message:
          'Falha no Servidor!!! Não foi possivel realizar a autentificação do usuário',
        error
      });
    }
  }
};

const Admin = require('../models/Admin');
const Token = require('../models/Token');
const logger = require('../logs/FileLogger');

module.exports = {
  async authenticate (req, res) {
    try {
      const { email, password } = req.body;

      const user = await Admin.findOne({
        email
      });

      if (!user) {
        return res.status(404).json({
          message: 'Usuário não encontrado'
        });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ message: 'Senha Inválida' });
      }

      const token = user.generateToken();

      await Token.findOneAndDelete({ user: user._id });

      await Token.create({
        user: user._id,
        token,
        type: 'admin'
      });

      return res.json({
        user,
        token
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        message:
          'Falha no Servidor!!! Não foi possivel realizar a autentificação do usuário',
        error
      });
    }
  }
};

const Token = require('../models/Token');
const User = require('../models/User');

module.exports = {
  async show (req, res) {
    try {
      const { token: data } = req.params;

      const token = await Token.findOne({ token: data, type: 'admin' });

      if (!token) {
        return res.status(401).send({
          message: 'Sua sessão expirou. Por favor, faça o login novamente.'
        });
      }

      const user = await User.findById(token.user);

      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
;

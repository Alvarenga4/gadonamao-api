const Token = require('../models/Token');

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

      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
;

const Token = require('../models/Token');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const parts = authHeader.split(' ');

    const [, data] = parts;

    const token = await Token.findOne({ token: data, type: 'admin' });

    if (!token) {
      return res.status(401).send({ message: 'Você não tem permissão de acesso' });
    }

    return next();
  } catch (error) {
    return res.status(500).send({ message: 'Falha para verificar admin' });
  }
}
;

const User = require('../models/User');
const Token = require('../models/Token');
const mongoose = require('mongoose');

module.exports = {
  async show (req, res) {
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(' ');
    const [, data] = parts;

    const token = await Token.findOne({ token: data });

    if (!token) {
      return res.status(404).send({ message: 'Nenhum usuário logado encontrado' });
    }

    const user = await User.findOne({ _id: token.user });

    return res.json(user);
  },

  async update (req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        email,
        whatsapp
      } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Usuário inválido'
        });
      }

      let data = {
        name,
        email,
        whatsapp
      };

      if (req.file) {
        const { filename } = req.file;
        data = {
          ...data,
          image: filename
        };
      }

      const user = await User.findOneAndUpdate({ _id: id }, data, {
        new: true
      });

      res.send(user);
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
        message: 'ID User inválido'
      });
    }

    await User.deleteOne({ _id: id });

    return res.json({ message: 'User excluido com sucesso' });
  }
};

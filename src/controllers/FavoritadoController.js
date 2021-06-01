const Anuncio = require('../models/Anuncio');
const Favorito = require('../models/Favorito');
const Token = require('../models/Token');
const mongoose = require('mongoose');

module.exports = {
  async show (req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Anuncio inválido'
        });
      }

      const authHeader = req.headers.authorization;
      const parts = authHeader.split(' ');
      const [, tokenData] = parts;

      const token = await Token.findOne({ token: tokenData });

      if (!token) {
        return res
          .status(404)
          .send({ message: 'Nenhum usuário logado encontrado' });
      }

      const data = await Favorito.findOne({
        user: token.user,
        anuncio: id
      });

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
          message: 'ID Anuncio inválido'
        });
      }

      const authHeader = req.headers.authorization;
      const parts = authHeader.split(' ');
      const [, tokenData] = parts;

      const token = await Token.findOne({ token: tokenData });

      const favoritado = await Favorito.findOne({
        user: token.user,
        anuncio: id
      });

      if (!favoritado) {
        await Favorito.create({
          user: token.user,
          anuncio: id
        });
      } else {
        await Favorito.deleteOne({
          user: token.user,
          anuncio: id
        });
      }

      const data = await Anuncio.findOneAndUpdate({ _id: id }, { favoritado }, {
        new: true
      });

      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message:
          'Falha no servidor!!! Não foi possivel processar a requisição.',
        error
      });
    }
  }
};

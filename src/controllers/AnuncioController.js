const Anuncio = require('../models/Anuncio');
const Animal = require('../models/Animal');
const Token = require('../models/Token');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    try {
      const { page, limit } = req.query;

      if (limit) {
        const anuncios = await Anuncio.paginate(
          {},
          {
            page,
            limit,
            sort: { createAt: -1 },
            customLabels: {
              docs: 'anuncios'
            }
          }
        );
        return res.json(anuncios);
      }
      const anuncios = await Anuncio.find().sort({ createAt: 'desc' });
      res.json(anuncios);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Anuncio inválido'
      });
    }

    const data = await Anuncio.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const {
        idade,
        pelagem,
        andrologia,
        peso,
        litro,
        registro,
        titulo,
        descricao,
        estado,
        cidade,
        preco,
        quantidade,
        unidade,
        categorias
      } = req.body;

      const anuncio = await Anuncio.create({
        titulo,
        descricao
      });

      const authHeader = req.headers.authorization;
      const parts = authHeader.split(' ');
      const [, data] = parts;

      const token = await Token.findOne({ token: data });

      const animal = await Animal.create({
        idade: idade || null,
        pelagem: pelagem || null,
        andrologia: andrologia || null,
        peso: peso || null,
        litro: litro || null,
        registro: registro || null,
        estado,
        cidade,
        preco,
        quantidade,
        unidade: unidade || null,
        categorias,
        anuncio: anuncio._id,
        user: token.user
      });

      res.send({ _id: anuncio._id, anuncio, animal });
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

      const {
        animalId,
        idade,
        pelagem,
        andrologia,
        peso,
        litro,
        registro,
        titulo,
        descricao,
        estado,
        cidade,
        preco,
        quantidade,
        unidade,
        categorias
      } = req.body;

      const anuncio = await Anuncio.findOneAndUpdate(
        { _id: id },
        {
          titulo,
          descricao
        },
        {
          new: true
        }
      );

      let animal;
      if (animal) {
        animal = await Animal.findOneAndUpdate(
          { _id: animalId },
          {
            idade: idade || null,
            pelagem: pelagem || null,
            andrologia: andrologia || null,
            peso: peso || null,
            litro: litro || null,
            registro: registro || null,
            estado,
            cidade,
            preco,
            quantidade,
            unidade: unidade || null,
            categorias
          },
          {
            new: true
          }
        );
      }

      res.send({ _id: anuncio._id, anuncio, animal });
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
        message: 'ID Anuncio inválido'
      });
    }

    await Anuncio.deleteOne({ _id: id });

    return res.json({ message: 'Anuncio excluido com sucesso' });
  }
};

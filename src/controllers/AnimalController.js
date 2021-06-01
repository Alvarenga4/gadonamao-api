const Animal = require('../models/Animal');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    try {
      const { page, limit, estado, cidade, idade, categoria } = req.query;

      let locationQuery;

      if (estado) {
        locationQuery = {
          estado: { $regex: new RegExp(estado), $options: 'i' }
        };
      }

      if (cidade) {
        locationQuery = {
          ...locationQuery,
          cidade: { $regex: new RegExp(cidade), $options: 'i' }
        };
      }

      const conditions = [];
      if (locationQuery) {
        conditions.push({ ...locationQuery });
      }

      if (idade) {
        conditions.push({ idade });
      }

      if (categoria) {
        conditions.push({ categorias: { $in: [categoria] } });
      }

      if (!conditions.length) {
        conditions.push({});
      }

      if (limit) {
        const animals = await Animal.paginate(
          { $or: conditions },
          {
            page,
            limit,
            populate: [
              'unidade',
              'idade',
              'pelagem',
              'andrologia',
              'peso',
              'litro',
              'categorias',
              'video',
              'anuncio'
            ],
            sort: { createAt: -1 },
            customLabels: {
              docs: 'animals'
            }
          }
        );
        return res.json(animals);
      }

      const animals = await Animal.find({}).or(conditions)
        .populate('anuncio')
        .populate('idade')
        .populate('categorias')
        .sort({ createAt: 'desc' });

      res.json(animals);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Animal inválido'
      });
    }

    const data = await Animal.findById(id)
      .populate('unidade')
      .populate('idade')
      .populate('video')
      .populate('categorias')
      .populate('anuncio')
      .populate('user');

    return res.json(data);
  },

  async store (req, res) {
    try {
      const data = await Animal.create(req.body);

      res.send(data);
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
          message: 'ID Animal inválido'
        });
      }

      const data = await Animal.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });

      res.send(data);
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
        message: 'ID Animal inválido'
      });
    }

    await Animal.deleteOne({ _id: id });

    return res.json({ message: 'Animal excluido com sucesso' });
  }
};

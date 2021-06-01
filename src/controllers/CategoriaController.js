const Categoria = require('../models/Categoria');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Categoria.find()
      .populate('categoria')
      .populate('idades')
      .populate('pelagems')
      .populate('andrologias')
      .populate({
        path: 'pesos',
        populate: 'unidade'
      })
      .populate({
        path: 'litros',
        populate: 'unidade'
      })
      .populate('registros');

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Categoria inválido'
      });
    }

    const data = await Categoria.findOne({ _id: id })
      .populate('categoria')
      .populate('idades')
      .populate('pelagems')
      .populate('andrologias')
      .populate({
        path: 'pesos',
        populate: 'unidade'
      })
      .populate({
        path: 'litros',
        populate: 'unidade'
      })
      .populate('registros');

    return res.json(data);
  },

  async store (req, res) {
    try {
      let data = req.body;

      if (req.file) {
        const { filename } = req.file;
        data = {
          ...data,
          image: filename
        };
      }

      console.log(req.body);
      data = {
        ...data,
        categoria:
          data.categoria
            ? data.categoria
            : null,
        idades:
          data.idades
            ? data.idades.split(',')
            : null,
        pelagems:
          data.pelagems
            ? data.pelagems.split(',')
            : null,
        andrologias:
          data.andrologias
            ? data.andrologias.split(',')
            : null,
        pesos:
          data.pesos
            ? data.pesos.split(',')
            : null,
        litros:
          data.litros
            ? data.litros.split(',')
            : null,
        registros:
          data.registros
            ? data.registros.split(',')
            : null
      };

      console.log(data);
      const categoria = await Categoria.create(data);

      res.send(categoria);
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
          message: 'ID Categoria inválido'
        });
      }

      let data = req.body;

      data = {
        ...data,
        categoria: data.categoria ? data.categoria : null,
        idades:
          data.idades
            ? data.idades.split(',')
            : null,
        pelagems:
          data.pelagems
            ? data.pelagems.split(',')
            : null,
        andrologias:
          data.andrologias
            ? data.andrologias.split(',')
            : null,
        pesos:
          data.pesos
            ? data.pesos.split(',')
            : null,
        litros:
          data.litros
            ? data.litros.split(',')
            : null,
        registros:
          data.registros
            ? data.registros.split(',')
            : null
      };

      if (req.file) {
        const { filename } = req.file;
        data = {
          ...data,
          image: filename
        };
      }

      const categoria = await Categoria.findOneAndUpdate({ _id: id }, data, {
        new: true
      });

      res.send(categoria);
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
        message: 'ID Categoria inválido'
      });
    }

    await Categoria.deleteOne({ _id: id });

    return res.json({ message: 'Categoria excluido com sucesso' });
  }
};

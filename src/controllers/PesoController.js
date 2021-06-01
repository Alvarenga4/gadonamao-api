const Peso = require('../models/Peso');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Peso.find().populate('unidade');

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Peso inválido'
      });
    }

    const data = await Peso.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { valor } = req.body;
      const peso = await Peso.findOne({ valor });

      if (peso) {
        return res.status(400).json({ message: 'Peso já cadastrado' });
      }

      const data = await Peso.create(req.body);

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
          message: 'ID Peso inválido'
        });
      }

      const data = await Peso.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Peso inválido'
      });
    }

    await Peso.deleteOne({ _id: id });

    return res.json({ message: 'Peso excluido com sucesso' });
  }
};

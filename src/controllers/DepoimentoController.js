const Depoimento = require('../models/Depoimento');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Depoimento.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Depoimento inválido'
      });
    }

    const data = await Depoimento.findOne({ _id: id });

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
      const depoimento = await Depoimento.create(data);

      res.send(depoimento);
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
          message: 'ID Depoimento inválido'
        });
      }

      const data = await Depoimento.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Depoimento inválido'
      });
    }

    await Depoimento.deleteOne({ _id: id });

    return res.json({ message: 'Depoimento excluido com sucesso' });
  }
};

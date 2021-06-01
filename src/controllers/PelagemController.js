const Pelagem = require('../models/Pelagem');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Pelagem.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Pelagem inválido'
      });
    }

    const data = await Pelagem.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { name } = req.body;
      const pelagem = await Pelagem.findOne({ name });

      if (pelagem) {
        return res.status(400).json({ message: 'Pelagem já cadastrado' });
      }

      const data = await Pelagem.create(req.body);

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
          message: 'ID Pelagem inválido'
        });
      }

      const data = await Pelagem.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Pelagem inválido'
      });
    }

    await Pelagem.deleteOne({ _id: id });

    return res.json({ message: 'Pelagem excluido com sucesso' });
  }
};

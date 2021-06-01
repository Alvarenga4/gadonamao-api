const Idade = require('../models/Idade');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Idade.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Idade inválido'
      });
    }

    const data = await Idade.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { name } = req.body;
      const idade = await Idade.findOne({ name });

      if (idade) {
        return res.status(400).json({ message: 'Idade já cadastrado' });
      }

      const data = await Idade.create(req.body);

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
          message: 'ID Idade inválido'
        });
      }

      const data = await Idade.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Idade inválido'
      });
    }

    await Idade.deleteOne({ _id: id });

    return res.json({ message: 'Idade excluido com sucesso' });
  }
};

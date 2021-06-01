const Unidade = require('../models/Unidade');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Unidade.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Unidade inválido'
      });
    }

    const data = await Unidade.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { name } = req.body;
      const unidade = await Unidade.findOne({ name });

      if (unidade) {
        return res.status(400).json({ message: 'Unidade já cadastrado' });
      }

      const data = await Unidade.create(req.body);

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
          message: 'ID Unidade inválido'
        });
      }

      const data = await Unidade.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Unidade inválido'
      });
    }

    await Unidade.deleteOne({ _id: id });

    return res.json({ message: 'Unidade excluido com sucesso' });
  }
};

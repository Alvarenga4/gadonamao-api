const Registro = require('../models/Registro');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Registro.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Registro inválido'
      });
    }

    const data = await Registro.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { name } = req.body;
      const registro = await Registro.findOne({ name });

      if (registro) {
        return res.status(400).json({ message: 'Registro já cadastrado' });
      }

      const data = await Registro.create(req.body);

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
          message: 'ID Registro inválido'
        });
      }

      const data = await Registro.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Registro inválido'
      });
    }

    await Registro.deleteOne({ _id: id });

    return res.json({ message: 'Registro excluido com sucesso' });
  }
};

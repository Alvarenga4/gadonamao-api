const Email = require('../models/Email');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Email.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Email inválido'
      });
    }

    const data = await Email.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { email } = req.body;
      const existEmail = await Email.findOne({ email });

      if (existEmail) {
        return res.status(400).json({ message: 'Email já cadastrado' });
      }

      const data = await Email.create(req.body);

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
          message: 'ID Email inválido'
        });
      }

      const data = await Email.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Email inválido'
      });
    }

    await Email.deleteOne({ _id: id });

    return res.json({ message: 'Email excluido com sucesso' });
  }
};

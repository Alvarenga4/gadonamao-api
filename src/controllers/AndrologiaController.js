const Andrologia = require('../models/Andrologia');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Andrologia.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Andrologia inválido'
      });
    }

    const data = await Andrologia.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const { name } = req.body;
      const andrologia = await Andrologia.findOne({ name });

      if (andrologia) {
        return res.status(400).json({ message: 'Andrologia já cadastrado' });
      }

      const data = await Andrologia.create(req.body);

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
          message: 'ID Andrologia inválido'
        });
      }

      const data = await Andrologia.findOneAndUpdate({ _id: id }, req.body, {
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
        message: 'ID Andrologia inválido'
      });
    }

    await Andrologia.deleteOne({ _id: id });

    return res.json({ message: 'Andrologia excluido com sucesso' });
  }
};

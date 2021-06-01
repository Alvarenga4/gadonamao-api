const Slider = require('../models/Sliders');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Slider.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Slider inválido'
      });
    }

    const data = await Slider.findOne({ _id: id });

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

      const slider = await Slider.create(data);

      res.send(slider);
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
          message: 'ID Slider inválido'
        });
      }

      let data = req.body;

      if (req.file) {
        const { filename } = req.file;
        data = {
          ...data,
          image: filename
        };
      }

      const slider = await Slider.findOneAndUpdate({ _id: id }, data, {
        new: true
      });

      res.send(slider);
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
        message: 'ID Slider inválido'
      });
    }

    await Slider.deleteOne({ _id: id });

    return res.json({ message: 'Slider excluido com sucesso' });
  }
};

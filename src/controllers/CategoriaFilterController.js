const Categoria = require('../models/Categoria');
const mongoose = require('mongoose');

module.exports = {
  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Categoria inválido'
      });
    }

    const data = await Categoria.find({ categoria: id })
      .populate('idades')
      .populate('registros');

    return res.json(data);
  }
};

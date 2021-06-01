const Anuncio = require('../models/Anuncio');
const mongoose = require('mongoose');

module.exports = {
  async update (req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Anuncio inválido'
        });
      }

      const anuncio = await Anuncio.findOne({ _id: id });
      await Anuncio.findOneAndUpdate({ _id: id }, { visualizado: anuncio.visualizado + 1 });

      return res.status(204).send();
    } catch (error) {
      console.log();
      return res.status(500).json({
        message:
          'Falha no servidor!!! Não foi possivel processar a requisição.',
        error
      });
    }
  }
};

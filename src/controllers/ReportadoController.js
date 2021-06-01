const Anuncio = require('../models/Anuncio');
const mongoose = require('mongoose');

module.exports = {
  async update (req, res) {
    try {
      const { id } = req.params;
      const { reportado } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Anuncio inválido'
        });
      }

      const data = await Anuncio.findOneAndUpdate({ _id: id }, { reportado }, {
        new: true
      });

      return res.send(data);
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

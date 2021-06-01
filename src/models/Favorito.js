const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  anuncio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anuncios'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Favoritos', FavoritoSchema);

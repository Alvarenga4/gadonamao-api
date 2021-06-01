const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const AnuncioSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  whatsapp: String,
  compartilhado: {
    type: Number,
    default: 0
  },
  favoritado: {
    type: Number,
    default: 0
  },
  reportado: {
    type: Number,
    default: 0
  },
  visualizado: {
    type: Number,
    default: 0
  },
  vendido: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

AnuncioSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Anuncios', AnuncioSchema);

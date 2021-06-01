const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Image = require('./Image');

const AnimalSchema = new mongoose.Schema({
  estado: String,
  cidade: String,
  preco: String,
  quantidade: Number,
  unidade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unidades'
  },
  idade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idades'
  },
  pelagem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelagems'
  },
  andrologia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Andrologias'
  },
  peso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pesos'
  },
  litro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Litros'
  },
  categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categorias'
    }
  ],
  images: [Image],
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Videos'
  },
  anuncio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anuncios'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

AnimalSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Animals', AnimalSchema);

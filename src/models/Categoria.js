const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    image: String,
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categorias'
    },
    idades: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Idades'
    }],
    pelagems: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pelagems'
    }],
    andrologias: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Andrologias'
    }],
    pesos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pesos'
    }],
    litros: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Litros'
    }],
    registros: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Registros'
    }],
    createAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

CategoriaSchema.virtual('image_url').get(function () {
  return this.image
    ? `${process.env.APP_URL}/image-gallery/${this.image}`
    : null;
});

CategoriaSchema.post('save', function (doc, next) {
  doc
    .populate('categoria')
    .execPopulate()
    .then(function () {
      next();
    });
});

CategoriaSchema.post('findOneAndUpdate', function (doc, next) {
  doc
    .populate('categoria')
    .execPopulate()
    .then(function () {
      next();
    });
});

module.exports = mongoose.model('Categorias', CategoriaSchema);

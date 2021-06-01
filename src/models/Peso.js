const mongoose = require('mongoose');

const PesoSchema = new mongoose.Schema({
  valor: String,
  unidade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unidades'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

PesoSchema.post('save', function (doc, next) {
  doc
    .populate('unidade')
    .execPopulate()
    .then(function () {
      next();
    });
});

PesoSchema.post('findOneAndUpdate', function (doc, next) {
  doc
    .populate('unidade')
    .execPopulate()
    .then(function () {
      next();
    });
});

module.exports = mongoose.model('Pesos', PesoSchema);

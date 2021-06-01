const mongoose = require('mongoose');

const LitroSchema = new mongoose.Schema({
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

LitroSchema.post('save', function (doc, next) {
  doc
    .populate('unidade')
    .execPopulate()
    .then(function () {
      next();
    });
});

LitroSchema.post('findOneAndUpdate', function (doc, next) {
  doc
    .populate('unidade')
    .execPopulate()
    .then(function () {
      next();
    });
});

module.exports = mongoose.model('Litros', LitroSchema);

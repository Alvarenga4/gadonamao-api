const mongoose = require('mongoose');

const UnidadeSchema = new mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Unidades', UnidadeSchema);

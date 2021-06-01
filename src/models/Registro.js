const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Registros', RegistroSchema);

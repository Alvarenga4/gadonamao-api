const mongoose = require('mongoose');

const IdadeSchema = new mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Idades', IdadeSchema);

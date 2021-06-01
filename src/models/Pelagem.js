const mongoose = require('mongoose');

const PelagemSchema = new mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pelagems', PelagemSchema);

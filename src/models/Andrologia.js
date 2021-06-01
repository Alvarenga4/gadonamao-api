const mongoose = require('mongoose');

const AndrologiaSchema = new mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Andrologias', AndrologiaSchema);

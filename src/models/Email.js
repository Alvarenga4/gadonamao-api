const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  name: String,
  email: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Emails', EmailSchema);

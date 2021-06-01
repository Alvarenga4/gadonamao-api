/* eslint-disable spaced-comment */
const mongoose = require('mongoose');

const RecoverPasswordSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RecoverPasswords', RecoverPasswordSchema);

/* eslint-disable spaced-comment */
const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  token: String,
  type: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tokens', TokenSchema);

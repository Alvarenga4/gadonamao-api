const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoSchema = new Schema({
  filename: String, // filename
  name: String, // originalname
  size: Number, // tamanho do arquivo
  url: String,
  createAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    virtuals: true
  }
});

VideoSchema.virtual('video_url').get(function () {
  return encodeURI(`${process.env.APP_STORAGE_URL}/video-gallery/${this.filename}`);
});

module.exports = mongoose.model('Videos', VideoSchema);

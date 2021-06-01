const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
  filename: String, // filename
  name: String, // originalname
  size: Number, // tamanho do arquivo
  createAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    virtuals: true
  }
});

ImageSchema.virtual('image_url').get(function () {
  return encodeURI(`${process.env.APP_STORAGE_URL}/image-gallery/${this.filename}`);
});

module.exports = ImageSchema;

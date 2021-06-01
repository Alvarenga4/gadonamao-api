const mongoose = require('mongoose');

const DepoimentoSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
    image: String,
    mensagem: String,
    createAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

DepoimentoSchema.virtual('image_url').get(function () {
  return this.image
    ? `${process.env.APP_STORAGE_URL}/image-gallery/${this.image}`
    : null;
});

module.exports = mongoose.model('Depoimentos', DepoimentoSchema);

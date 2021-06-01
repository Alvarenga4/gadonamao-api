const mongoose = require('mongoose');
const { Schema } = mongoose;

const SliderSchema = new Schema({
  link: String,
  url: String,
  image: String,
  createAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: {
    virtuals: true
  }
});

SliderSchema.virtual('image_url').get(function () {
  return this.image ? `${process.env.APP_STORAGE_URL}/image-gallery/${this.image}` : null;
});

module.exports = mongoose.model('Sliders', SliderSchema);

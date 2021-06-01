const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    image: String
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

AdminSchema.virtual('image_url').get(function () {
  return `${process.env.APP_STORAGE_URL}/image-gallery/${this.image}`;
});

AdminSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* AdminSchema.pre('findOneAndUpdate', async function() {
  console.log(await this.model.findOne(this.getQuery())); // true
}); */

AdminSchema.methods = {
  async compareHash (hash) {
    return await bcrypt.compare(hash, this.password);
  },

  async generateHash (password) {
    return await bcrypt.hash(password, 10);
  },

  generateToken () {
    return jwt.sign({ id: this.id }, process.env.AUTH_SECRET);
  }
};

module.exports = mongoose.model('Admins', AdminSchema);

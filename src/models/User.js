const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    whatsapp: String,
    image: String,
    password: String,
    approved: Boolean
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.virtual('image_url').get(function () {
  return `${process.env.APP_STORAGE_URL}/image-gallery/${this.image}`;
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* UserSchema.pre('findOneAndUpdate', async function() {
  console.log(await this.model.findOne(this.getQuery())); // true
}); */

UserSchema.methods = {
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

module.exports = mongoose.model('Users', UserSchema);

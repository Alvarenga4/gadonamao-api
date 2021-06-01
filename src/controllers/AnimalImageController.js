const Animal = require('../models/Animal');

module.exports = {
  async store (req, res) {
    try {
      const { id } = req.params;
      const { filename, size, originalname } = req.file;

      const image = {
        filename,
        size,
        name: originalname
      };

      const animal = await Animal.findById(id);

      animal.images.push(image);

      await animal.save();

      return res.send(image);
    } catch (error) {
      console.log(error);
    }
  }
};

const Video = require('../models/Video');
const Animal = require('../models/Animal');

module.exports = {
  async store (req, res) {
    try {
      const { id } = req.params;
      const { filename, size, originalname } = req.file;

      const video = await Video.create({
        filename,
        size,
        name: originalname
      });

      const animal = await Animal.findById(id);

      // const uploadFolder = path.resolve(__dirname, '..', '..', '..', 'uploads');

      animal.video = video._id;

      await animal.save();

      return res.send(video);
    } catch (error) {
      console.log(error);
    }
  }
};

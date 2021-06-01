const multer = require('multer');
const path = require('path');
const fileUtil = require('../helpers/file');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      const newFilename = fileUtil.getNewFilename(file.originalname);
      cb(null, newFilename);
    }
  }),
  azure: multer.memoryStorage()
  /* s3: multerS3({
      s3: new aws.S3(),
      bucket: process.env.BUCKET_NAME,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);

          const fileName = `${hash.toString("hex")}-${file.originalname}`;

          cb(null, fileName);
        });
      }
    }) */
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', '..', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  /* limits: {
    fileSize: 10 * 1024 * 1024
  }, */
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
      'video/mp4'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  }
};
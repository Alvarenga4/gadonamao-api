const mongoose = require('mongoose');
const expressLoader = require('./express');
const listernersLoader = require('./listeners');
const schedulerLoader = require('./schedulers');

module.exports = async ({ app }) => {
  mongoose.connect(process.env.DB_URL, {
    // mongoose.connect('mongodb://localhost:27017/vertex_delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  await expressLoader({ app });
  await listernersLoader();
  await schedulerLoader();
};

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../../router');

module.exports = async ({ app }) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public', 'site'))); // Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public', 'admin'))); // Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public', 'adminuser'))); // Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.
  app.use('/image-gallery', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')));
  app.use('/video-gallery', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')));

  // routers
  app.use('/', routes.index);
  app.use('/api', routes.api);

  return app;
};

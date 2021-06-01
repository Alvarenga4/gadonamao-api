require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
const debug = require('debug')('integracao:server');
const loaders = require('../src/loaders');
const logger = require('../src/logs/Filelogger');

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onError = (error, port) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
};

const startServer = async () => {
  // inicia o log file
  logger.info('=================================== START API ===================================');

  // loaders
  await loaders({ app });

  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  server.listen(port);
  server.on('error', (error) => onError(error, port));
  server.on('listening', onListening);

  logger.info('api on-line');
};

startServer();

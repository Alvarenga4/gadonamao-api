if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const server = require('https').createServer({
  key: fs.readFileSync(path.join(__dirname, '..', 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'cert', 'cert.pem'))
}, app);
const debug = require('debug')('integracao:server');
const loaders = require('../src/loaders');

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

  console.log(bind);

  switch (error.code) {
    case 'EACCES':
      process.exit(1);
    case 'EADDRINUSE':
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`api on-line ${bind}`);
};

const startServer = async () => {
  // loaders
  await loaders({ app });

  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  server.listen(port);
  server.on('error', (error) => onError(error, port));
  server.on('listening', onListening);
};

startServer();

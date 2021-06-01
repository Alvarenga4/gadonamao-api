const sha = require('sha-1');

module.exports = (string = '') => {
  return sha(`${string}${new Date()}`);
};

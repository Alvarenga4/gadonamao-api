module.exports = {
  getNumberOfString (value = '') {
    return value.replace(/[^\d]+/g, '');
  },

  maxLength (value = '', max = 0) {
    return value.substr(0, max);
  },

  isOnlyNumbers (value = '') {
    return /^\d+$/.test(value);
  }
};

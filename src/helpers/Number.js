module.exports = {
  parseStringToDecimalNumber: (value) => {
    return parseFloat(value.replace(',', '.'));
  }
};

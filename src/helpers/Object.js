module.exports = {
  toUpperCaseElements (object) {
    for (const prop in object) {
      const element = object[prop];
      if (typeof element === 'string') {
        object[prop] = element.toUpperCase();
      }
    }

    return object;
  }
};

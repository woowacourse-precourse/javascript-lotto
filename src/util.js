const toNumberType = function toNumberType(value) {
  if (value === '') {
    return '';
  }

  return Number(value);
};

module.exports = {
  toNumberType
};

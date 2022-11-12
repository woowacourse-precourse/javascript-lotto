const toNumberType = function toNumberType(value) {
  if (value === '') {
    return '';
  }

  return Number(value);
};

const sortNumbers = function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
};

const splitByComma = function splitByComma(value) {
  if (value === '') {
    return '';
  }

  return value.split(',').map(Number);
};

module.exports = {
  toNumberType,
  sortNumbers,
  splitByComma
};

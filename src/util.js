const toNumberType = function toNumberType(value) {
  if (value === '') {
    return '';
  }

  return Number(value);
};

const sortNumbers = function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
};

module.exports = {
  toNumberType,
  sortNumbers
};

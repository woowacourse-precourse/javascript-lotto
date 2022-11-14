const { LOTTO_RANGE_REGEX } = require('../constants');

const checkWinningNumbersLength = (numbers) => {
  if (numbers.length !== 6) return true;
  return false;
};

const checkWinningNumbersDuplication = (numbers) => {
  if (new Set(numbers).size !== numbers.length) return true;
  return false;
};

const checkWinningNumbersRange = (numbers) => {
  return numbers.every((item) => LOTTO_RANGE_REGEX.test(item));
};

module.exports = {
  checkWinningNumbersLength,
  checkWinningNumbersDuplication,
  checkWinningNumbersRange,
};

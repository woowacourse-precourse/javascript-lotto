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
  numbers.forEach((item) => {
    if (!LOTTO_RANGE_REGEX.test(item)) {
      return true;
    }
  });
  return false;
};

module.exports = {
  checkWinningNumbersLength,
  checkWinningNumbersDuplication,
  checkWinningNumbersRange,
};

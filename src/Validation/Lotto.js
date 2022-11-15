const { LOTTO_INFO } = require("../Constants");

const isNumberOfLottoNumbersCorrect = (numbers) =>
  numbers.length === LOTTO_INFO.number_of_numbers;

const isNumbersInRange = (numbers) => {
  for (let i = 0, length = numbers.length; i < length; i++) {
    if (numbers[i] < LOTTO_INFO.min || numbers[i] > LOTTO_INFO.max) {
      return false;
    }
  }
  return true;
};

const hasDuplicateNumbers = (numbers) =>
  new Set(numbers).size !== numbers.length;

const isNumberOfBonusNumberCorrect = (numbers) => {
  return numbers.length === LOTTO_INFO.number_of_bonus_number;
};

module.exports = {
  isNumberOfLottoNumbersCorrect,
  isNumbersInRange,
  hasDuplicateNumbers,
  isNumberOfBonusNumberCorrect,
};

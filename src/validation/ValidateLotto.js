const { MIN_NUMBER, MAX_NUMBER, ERROR_MSG } = require("../constants");

const ValidateLotto = (numbers) => {
  checkLength(numbers);
  checkDuplicated(numbers);
  checkRange(numbers);
  checkNotANumber(numbers);
};

const checkLength = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MSG.NOT_SIX_NUMBERS);
  }
};

checkDuplicated = (numbers) => {
  let idx = 0;
  while (idx < 5) {
    if (numbers.indexOf(numbers[idx]) != numbers.lastIndexOf(numbers[idx])) {
      throw new Error(ERROR_MSG.LOTTO_DUPLICATED);
    }
    idx += 1;
  }
};

checkRange = (numbers) => {
  numbers.forEach((number) => {
    if (+number < MIN_NUMBER || +number > MAX_NUMBER) {
      throw new Error(ERROR_MSG.OUT_OF_RANGE);
    }
  });
};

checkNotANumber = (numbers) => {
  numbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error(ERROR_MSG.LOTTO_NOT_A_NUMBER);
    }
  });
};

module.exports = ValidateLotto;

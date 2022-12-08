const { NUMBERS } = require("../constants/constants");

const isDuplicated = (arr) => {
  const set = new Set(arr);

  if (arr.length !== set.size) return true;
};

const isOutOfRange = (numberOrNumbers) => {
  if (typeof numberOrNumbers === "object") {
    const numbersArr = numberOrNumbers;
    for (const number of numbersArr) {
      if (number < NUMBERS.MIN_LOTTO_NUM || number > NUMBERS.MAX_LOTTO_NUM) {
        return true;
      }
    }
  }

  if (typeof numberOrNumbers === "string") {
    const number = numberOrNumbers;
    if (
      Number(number) < NUMBERS.MIN_LOTTO_NUM ||
      Number(number) > NUMBERS.MAX_LOTTO_NUM
    )
      return true;
  }

  return false;
};

module.exports = { isDuplicated, isOutOfRange };

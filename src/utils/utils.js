const { NUMBERS } = require("../constants/constants");

const getRandomInt = () => {
  min = Math.ceil(NUMBERS.MIN_LOTTO_NUM);
  max = Math.floor(NUMBERS.MAX_LOTTO_NUM);

  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const isDuplicated = (arr) => {
  const set = new Set(arr);

  if (arr.length !== set.size) return true;
};

const isOutOfRange = (numberOrNumbers) => {
  if (typeof numberOrNumbers === "object") {
    const numbersArr = numberOrNumbers;
    for (let i = 0; i < numbersArr.length; i++) {
      if (numbersArr[i] < 1 || numbersArr[i] > 45) {
        return true;
      }
    }
  }

  if (typeof numberOrNumbers === "string") {
    const number = numberOrNumbers;
    if (Number(number) < 1 || Number(number) > 45) return true;
  }

  return false;
};

module.exports = { getRandomInt, isDuplicated, isOutOfRange };

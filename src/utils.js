const { NUMBERS } = require("../src/constants");

const getRandomInt = () => {
  min = Math.ceil(NUMBERS.MIN_LOTTO_NUM);
  max = Math.floor(NUMBERS.MAX_LOTTO_NUM);

  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const isDuplicated = (arr) => {
  const set = new Set(arr);

  if (arr.length !== set.size) return true;
};

const isInRange = (numberOrNumbers) => {
  if (typeof numberOrNumbers === "object") {
    const numbersArr = numberOrNumbers;
    numbersArr.forEach((num) => {
      if (num < 1 || num > 45) return false;
    });
  }

  if (typeof numberOrNumbers === "string") {
    const number = numberOrNumbers;
    if (Number(number) < 1 || Number(number) > 45) return false;
  }
  return true;
};

module.exports = { getRandomInt, isDuplicated, isInRange };

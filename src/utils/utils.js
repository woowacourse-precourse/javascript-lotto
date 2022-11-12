const { AMOUNT_UNIT, ERROR } = require("./constants");

const hasChar = (input) => {
  if (/([^0-9])/g.test(input)) {
    return true;
  }
  return false;
};

const isDivisible = (input) => {
  if (Number(input) % AMOUNT_UNIT !== 0) {
    return false;
  }
  return true;
};

const hasCharExceptComma = (string) => {
  if (RegExp(/([^?!,0-9 ])/g).test(string)) {
    return true;
  }
  return false;
};

const makeSplit = (string) => {
  const array = string.split(",");
  if (array.includes("") || array.includes(" ")) {
    throw new Error(ERROR.MISUSE_COMMA);
  }
  return array;
};

const makeNumberArray = (array) => {
  const numberArray = array.map(Number);
  if (numberArray.includes(NaN)) {
    throw new Error(ERROR.IS_NAN);
  }
  return numberArray;
};

const ascendingSort = (numberArray) => {
  return numberArray.sort((a, b) => a - b);
};

module.exports = {
  hasChar,
  isDivisible,
  hasCharExceptComma,
  makeSplit,
  makeNumberArray,
  ascendingSort,
};

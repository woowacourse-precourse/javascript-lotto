const { DELIMITER } = require('../constants');

const stringToNumberArray = (inputValue) => {
  return inputValue
    .split(DELIMITER)
    .map(Number)
    .sort((a, b) => a - b);
};

const getSameElemetCount = (arrayA, arrayB) => {
  return arrayA.filter((elem) => arrayB.includes(elem)).length;
};

const doesArrayIncludeNumber = (array, number) => array.includes(number);

module.exports = {
  stringToNumberArray,
  getSameElemetCount,
  doesArrayIncludeNumber,
};

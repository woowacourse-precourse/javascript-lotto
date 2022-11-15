const { ERROR_PREFIX, ERROR_MSG } = require('./constants');

const makeErrorMsg = (errorType) => `${ERROR_PREFIX} ${ERROR_MSG[errorType]}`;

const invalidNumber = (numbers) =>
  numbers.filter((number) => typeof number !== 'number' || Number.isNaN(number))
    .length > 0;

const invalidInputNum = (numbers, num) => numbers.length !== num;

const invalidDuplication = (numbers, num) => new Set(numbers).size !== num;

const invalidRange = (numbers, [minNum, maxNum]) =>
  numbers.filter((number) => !(number >= minNum && number <= maxNum)).length >
  0;

module.exports = {
  makeErrorMsg,
  invalidNumber,
  invalidInputNum,
  invalidDuplication,
  invalidRange,
};

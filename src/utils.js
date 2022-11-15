const { ERROR_PREFIX } = require('./constants');

const makeErrorMsg = (errorMsg) => `${ERROR_PREFIX} ${errorMsg}`;

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

const { Random } = require('@woowacourse/mission-utils');

const { InvalidWinningNumbersInputError } = require('../lib/errors');
const { NUMBER_COUNT, MIN_NUMBER, MAX_NUMBER } = require('./constants');

const hasChar = input => {
  if (input.length === 0 || /([^0-9])/g.test(input)) {
    return true;
  }
  return false;
};

const isDivisible = (input, unit) => {
  if (Number(input) === 0 || Number(input) % unit !== 0) {
    return false;
  }
  return true;
};

const hasCharExceptComma = string => {
  if (RegExp(/([^?!,0-9 ])/g).test(string)) {
    return true;
  }
  return false;
};

const makeSplit = string => {
  const array = string.split(',');
  if (array.includes('') || array.includes(' ')) {
    throw new InvalidWinningNumbersInputError();
  }
  return array;
};

const makeNumberArray = array => {
  const numberArray = array.map(Number);
  if (numberArray.includes(NaN)) {
    throw new InvalidWinningNumbersInputError();
  }
  return numberArray;
};

const ascendingSort = numberArray => {
  return numberArray.sort((a, b) => a - b);
};

const isOutOfRange = number => {
  return Number(number) < MIN_NUMBER || number > MAX_NUMBER;
};

const hasDuplicate = numberArray => {
  if (new Set(numberArray).size !== numberArray.length) {
    return true;
  }
  return false;
};

const parseNumbers = numbers => {
  const array = makeSplit(numbers);
  const numberArray = makeNumberArray(array);

  return numberArray;
};

const generateRandomNumbers = () => {
  const lotto = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT);
  return ascendingSort(lotto);
};

const roundToTwo = number => {
  return +(Math.round(number + 'e+1') + 'e-1');
};

module.exports = {
  hasChar,
  isDivisible,
  hasCharExceptComma,
  makeSplit,
  makeNumberArray,
  ascendingSort,
  isOutOfRange,
  hasDuplicate,
  parseNumbers,
  generateRandomNumbers,
  roundToTwo,
};

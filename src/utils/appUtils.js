const { Console } = require('@woowacourse/mission-utils');
const ERROR_MESSAGE = require('../constants/errorMessages');
const APP = require('../constants/app');
const LOTTO = require('../constants/lotto');

const isDivisible = (amount) => {
  if (amount % APP.MINIMUM_AMOUNT !== 0) return false;

  return true;
};

const isNumberInRange = (number) => number >= LOTTO.FIRST_NUMBER && number <= LOTTO.LAST_NUMBER;

const isCorrectSeparator = (input) => input.search(APP.SEPARATOR_REGEX) !== -1;

const hasOwnProperty = (obj, index) => Object.prototype.hasOwnProperty.call(obj, index);

const validateAmount = (amount) => {
  if (Number.isNaN(Number(amount))) throw new Error(ERROR_MESSAGE.AMOUNT_ERROR);

  if (!isDivisible(amount)) throw new Error(ERROR_MESSAGE.DIVISIBLE_ERROR);
};

const validatePrizeNumbers = (input) => {
  const map = {};
  const prizeNumbers = input.split(APP.SEPARATOR);

  if (!isCorrectSeparator(input)) throw new Error(ERROR_MESSAGE.SEPARATOR_ERROR);

  if (prizeNumbers.length !== 6) throw new Error(ERROR_MESSAGE.LENGTH_ERROR);

  prizeNumbers.forEach((item) => {
    const number = Number(item);

    if (Number.isNaN(number)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

    if (!isNumberInRange(number)) throw new Error(ERROR_MESSAGE.RANGE_ERROR);

    if (hasOwnProperty(map, number)) throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    map[number] = true;
  });
};

const validateBonusNumber = (input, prizeNumbers) => {
  const bonusNumber = Number(input);

  if (Number.isNaN(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  if (!isNumberInRange(bonusNumber)) throw new Error(ERROR_MESSAGE.RANGE_ERROR);

  if (prizeNumbers.includes(bonusNumber)) throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
};

const printArray = (items) => {
  items.forEach((item) => Console.print(item));
};

const printEmpty = () => {
  Console.print('');
};

const resolvedCallback = (callback, resolve) => (input) => {
  callback(input);
  resolve();
};

const synchronousReadLine = (message, callback) =>
  new Promise((resolve) => {
    Console.readLine(message, resolvedCallback(callback, resolve));
  });

module.exports = {
  validateAmount,
  validatePrizeNumbers,
  validateBonusNumber,
  printEmpty,
  printArray,
  synchronousReadLine,
};

const { TICKET_PRICE, ERROR_MESSAGE } = require('./CONSTANT');
const { convertNumberToComma } = require('./string');

const isNumberInRange = (number) => {
  if (number > 45) {
    return false;
  }
  if (number < 1) {
    return false;
  }
  return true;
};
const isSixNumbers = (numbers) => numbers.length !== 6;
const isNumbersUnique = (numbers) => Array.from(new Set(numbers)).length === 6;
const isNumbersInRange = (numbers) => {
  let result = true;
  numbers.forEach((number) => {
    result = isNumberInRange(number);
  });
  return result;
};

const isNumberSorted = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  if (JSON.stringify(sortedNumbers) !== JSON.stringify(numbers)) {
    return false;
  }
  return true;
};

const isNaN = (number) => {
  if (Number.isNaN(number)) {
    throw Error(`[ERROR] ${ERROR_MESSAGE.isNumber}`);
  }
};

const validateNumbers = (numbers) => {
  if (isSixNumbers(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isSixNumbers}`);
  }
  if (!isNumbersUnique(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumbersUnique}`);
  }
  if (!isNumbersInRange(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumbersInRange}`);
  }
  if (!isNumberSorted(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumberSorted}`);
  }
  numbers.forEach((number) => isNaN(number));
};

const validateNumber = (number) => {
  isNaN(number);
  if (!isNumberInRange(number)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumbersInRange}`);
  }
};

const validateMoney = (money) => {
  isNaN(money);
  if (money % TICKET_PRICE !== 0) {
    throw Error(`[ERROR] ${convertNumberToComma(1000)}${ERROR_MESSAGE.isThousands}`);
  }
};

module.exports = {
  validateNumbers, validateMoney, validateNumber, isNumberSorted, isNumbersUnique,
};

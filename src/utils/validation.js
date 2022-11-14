const { ERROR_MESSAGE } = require('./CONSTANT');

const isSixNumbers = (numbers) => numbers.length !== 6;
const isNumbersUnique = (numbers) => Array.from(new Set(numbers)).length !== 6;
const isNumbersInRange = (numbers) => {
  let result = true;
  numbers.forEach((number) => {
    if (number > 45) {
      result = false;
    }
    if (number < 1) {
      result = false;
    }
  });
  return result;
};
const validateNumbers = (numbers) => {
  if (isSixNumbers(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isSixNumbers}`);
  }
  if (isNumbersUnique(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumbersUnique}`);
  }
  if (!isNumbersInRange(numbers)) {
    throw new Error(`[ERROR] ${ERROR_MESSAGE.isNumbersInRange}`);
  }
};
module.exports = { validateNumbers };

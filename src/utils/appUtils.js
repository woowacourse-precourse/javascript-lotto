const APP = require('../constants/app');
const ERROR_MESSAGE = require('../constants/errorMessages');

const isDivisible = (amount) => {
  if (amount % APP.MINIMUM_AMOUNT !== 0) return false;

  return true;
};

const validateAmount = (amount) => {
  if (Number.isNaN(Number(amount))) throw new Error(ERROR_MESSAGE.AMOUNT_ERROR);

  if (!isDivisible(amount)) throw new Error(ERROR_MESSAGE.DIVISIBLE_ERROR);
};

module.exports = {
  validateAmount,
};

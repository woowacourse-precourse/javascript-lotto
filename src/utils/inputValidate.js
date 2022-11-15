const Display = require('../Display');

const throwErrorMessage = (errorMessage) => {
  throw new Error(errorMessage);
};

const isDuplicatedAndThrowError = (input) => {
  const match = input.length === new Set(input).size;
  if (!match) throwErrorMessage(Display.error('DUPLICATED'));
};

module.exports = {
  REG_NUMBER_RANGE,
  isDuplicatedAndThrowError,
};

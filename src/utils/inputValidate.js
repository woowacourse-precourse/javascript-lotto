const Display = require('../Display');

const REG_NUMBER_RANGE = /^[0-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;

const throwErrorMessage = (errorMessage) => {
  throw new Error(errorMessage);
};

const isDuplicatedAndThrowError = (input) => {
  const match = input.length === new Set(input).size;
  if (!match) throwErrorMessage(Display.error('DUPLICATED'));
};

const isOutOfRangeAndThrowError = (input) => {
  for (let number of input) {
    const match = REG_NUMBER_RANGE.test(number);
    if (!match) throwErrorMessage(Display.error('OUT_OF_RANGE'));
  }
};

const isOutOfVolumeAndThrowError = (input, volume) => {
  if (input.length !== volume) throwErrorMessage(Display.error('OUT_OF_VOLUME'));
};

const validatePayment = (payment) => {
  if (payment === 0 || payment % Display.info('PRICE') !== 0) throwErrorMessage(Display.error('PAYMENT'));
};

const validateWinningNumbersInput = (input) => {
  input = input.split(',');

  isOutOfVolumeAndThrowError(input, 6);
  isDuplicatedAndThrowError(input);
  isOutOfRangeAndThrowError(input);
};

const validateBonusNumberInput = (input) => {
  input = input.split(',');

  isOutOfVolumeAndThrowError(input, 1);
  isOutOfRangeAndThrowError(input);
};

module.exports = {
  REG_NUMBER_RANGE,
  isOutOfRangeAndThrowError,
  isDuplicatedAndThrowError,
  isOutOfVolumeAndThrowError,
  validatePayment,
  validateWinningNumbersInput,
  validateBonusNumberInput,
};

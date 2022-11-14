const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constant');

const isValidNumber = (input) => {
  const numberRegex = /^\d+$/g;
  if (input.match(numberRegex)) return;

  Console.close();
  throw new Error(ERROR.INVALID_TYPE);
};

const isNotZero = (input) => {
  if (input !== '0') return;

  Console.close();
  throw new Error(ERROR.INVALID_AMOUNT);
};

const isValidUnit = (input) => {
  if (!(input % 1000)) return;

  Console.close();
  throw new Error(ERROR.INVALID_UNIT);
};

const checkMoneyValidation = (input) => {
  isValidNumber(input);
  isNotZero(input);
  isValidUnit(input);
};

/* Lotto Number Validation */
const checkIncludeComma = (numbers) => {
  if (numbers.includes(',')) return;

  Console.close();
  throw new Error(ERROR.INVALID_DIVIDE);
};

const checkValidLength = (inputNumbers) => {
  const numbersArray = inputNumbers.split(',');
  if (numbersArray.length === 6) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const isValidRange = (number) => {
  if (number >= 1 || number <= 45) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const checkLottoNumbersValidation = (inputNumbers) => {
  checkIncludeComma(inputNumbers);
  checkValidLength(inputNumbers);

  const numbersArray = inputNumbers.split(',');
  numbersArray.forEach((number) => {
    isValidNumber(number);
    isValidRange(number);
  });
};

/* Bonus Number Validation */
const checkBonusIsDuplicated = (bonusNumber, numbers) => {
  if (!numbers.includes(Number(bonusNumber))) return;

  Console.close();
  throw new Error(ERROR.DUPLICATE);
};

const checkBonusNumberValidation = (bonusNumber, numbers) => {
  isValidNumber(bonusNumber);
  isValidRange(bonusNumber);
  checkBonusIsDuplicated(bonusNumber, numbers);
};

module.exports = {
  checkMoneyValidation,
  checkLottoNumbersValidation,
  checkBonusNumberValidation,
  isValidNumber,
};

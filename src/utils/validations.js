const { Console } = require('@woowacourse/mission-utils');
const { ERROR, STRING, NUMBER, REGEX } = require('./constant');

const isValidNumber = (input) => {
  const numberRegex = REGEX.NUMBER;
  if (input.match(numberRegex)) return;

  Console.close();
  throw new Error(ERROR.INVALID_TYPE);
};

const isNotZero = (input) => {
  if (input !== STRING.ZERO) return;

  Console.close();
  throw new Error(ERROR.INVALID_AMOUNT);
};

const isValidUnit = (input) => {
  if (!(input % NUMBER.PRICE_UNIT)) return;

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
  if (numbers.includes(STRING.COMMA)) return;

  Console.close();
  throw new Error(ERROR.INVALID_DIVIDE);
};

const checkValidLength = (inputNumbers) => {
  const numbersArray = inputNumbers.split(STRING.COMMA);
  if (numbersArray.length === NUMBER.LOTTO_LENGTH) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const isValidRange = (number) => {
  if (number >= NUMBER.MIN_LOTTO_RANGE || number <= NUMBER.MAX_LOTTO_RANGE) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const checkLottoNumbersValidation = (inputNumbers) => {
  checkIncludeComma(inputNumbers);
  checkValidLength(inputNumbers);

  const numbersArray = inputNumbers.split(STRING.COMMA);
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

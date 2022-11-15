const { Console } = require('@woowacourse/mission-utils');
const { STRING, NUMBER, REGEX } = require('../constants/value');
const { ERROR } = require('../constants/UI');

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

const checkValidStringLength = (inputNumbers) => {
  const numbersArray = inputNumbers.split(STRING.COMMA);
  if (numbersArray.length === NUMBER.LOTTO_LENGTH) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const checkValidArrayLength = (numbersArray) => {
  if (numbersArray.length === NUMBER.LOTTO_LENGTH) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const isValidRange = (number) => {
  if (number >= NUMBER.MIN_LOTTO_RANGE && number <= NUMBER.MAX_LOTTO_RANGE) return;

  Console.close();
  throw new Error(ERROR.INVALID_RANGE);
};

const checkLottoInputValidation = (inputNumbers) => {
  checkIncludeComma(inputNumbers);
  checkValidStringLength(inputNumbers);

  const numbersArray = inputNumbers.split(STRING.COMMA);
  numbersArray.forEach((number) => {
    isValidNumber(number);
    isValidRange(number);
  });
};

const checkLottoNumberDuplicate = (numbersArray) => {
  const filtered = numbersArray.filter((value, index) => numbersArray.indexOf(value) !== index);
  if (filtered.length === 0) return;

  Console.close();
  throw new Error(ERROR.LOTTO_NUMBER_DUPLICATE);
};

const checkLottoNumbersValidation = (numbersArray) => {
  checkValidArrayLength(numbersArray);
  checkLottoNumberDuplicate(numbersArray);
};

/* Bonus Number Validation */
const checkBonusIsDuplicated = (bonusNumber, numbers) => {
  if (!numbers.includes(Number(bonusNumber))) return;

  Console.close();
  throw new Error(ERROR.BONUS_DUPLICATE);
};

const checkBonusNumberValidation = (bonusNumber, numbers) => {
  isValidNumber(bonusNumber);
  isValidRange(bonusNumber);
  checkBonusIsDuplicated(bonusNumber, numbers);
};

module.exports = {
  checkMoneyValidation,
  checkLottoInputValidation,
  checkLottoNumbersValidation,
  checkBonusNumberValidation,
  isValidNumber,
};

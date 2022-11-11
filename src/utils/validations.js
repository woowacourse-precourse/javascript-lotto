const { Console } = require('@woowacourse/mission-utils');

const isValidNumber = (input) => {
  const numberRegex = /^\d+$/g;
  if (input.match(numberRegex)) return;

  Console.close();
  throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
};

const isNotZero = (input) => {
  if (input !== '0') return;

  Console.close();
  throw new Error('[ERROR] 복권을 한 장 이상 구매하셔야 합니다.');
};

const isValidUnit = (input) => {
  if (!(input % 1000)) return;

  Console.close();
  throw new Error('[ERROR] 입력할 수 있는 최소 단위금액은 1000원입니다.');
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
  throw new Error('[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.');
};

const checkValidLength = (inputNumbers) => {
  const numbersArray = inputNumbers.split(',');
  if (numbersArray.length === 6) return;

  Console.close();
  throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
};

const isValidRange = (number) => {
  if (number >= 1 || number <= 45) return;

  Console.close();
  throw new Error('[ERROR] 입력할 수 있는 범위는 1에서 45 사이입니다.');
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

module.exports = {
  checkMoneyValidation,
  checkLottoNumbersValidation,
  isValidNumber,
};

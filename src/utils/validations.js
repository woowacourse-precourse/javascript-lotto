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

module.exports = { checkMoneyValidation };

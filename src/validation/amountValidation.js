function amountValidation(input) {
  checkAmountEmpty(input);
  checkAmountStirng(input);
  checkAmountUnit(input);

  return true;
}

function checkAmountUnit(input) {
  if (input[input.length - 1] !== '0') {
    throw new Error('[ERROR] 1000원 이하의 금액은 입력할수 없습니다.');
  }
  if (input[input.length - 2] !== '0') {
    throw new Error('[ERROR] 1000원 이하의 금액은 입력할수 없습니다.');
  }
  if (input[input.length - 3] !== '0') {
    throw new Error('[ERROR] 1000원 이하의 금액은 입력할수 없습니다.');
  }
}

function checkAmountStirng(input) {
  if (/[^(0-9)]/gi.test(input)) {
    throw new Error('[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.');
  }
}

function checkAmountEmpty(input) {
  if (input === '') {
    throw new Error('[ERROR] 공백은 입력할수 없습니다.');
  }
}

module.exports = {
  amountValidation,
  checkAmountUnit,
  checkAmountStirng,
  checkAmountEmpty,
};

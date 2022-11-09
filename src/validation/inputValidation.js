function amountValidation(input) {
  checkAmountNumber(input);
  checkAmountStirng(input);
  checkAmountEmpty(input);

  return true;
}

function checkAmountUnit(input) {
  if (input[input.length - 1] !== '0') {
    throw new Error('[ERROR] 일의 자리 금액은 입력할수 없습니다.');
  }
  if (input[input.length - 2] !== '0') {
    throw new Error('[ERROR] 십의 자리 금액은 입력할수 없습니다.');
  }
  if (input[input.length - 3] !== '0') {
    throw new Error('[ERROR] 백의 자리 금액은 입력할수 없습니다.');
  }
}

function checkAmountStirng(input) {
  if (/[^(0-9)]/gi.test(input)) {
    throw new Error('[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.');
  }
}

module.exports = {
  amountValidation,
  checkAmountUnit,
  checkAmountStirng,
};

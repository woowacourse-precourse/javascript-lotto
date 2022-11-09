function amountValidation(input) {
  checkAmountUnit(input);
  checkAmountStirng(input);

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

module.exports = {
  amountValidation,
  checkAmountUnit,
};

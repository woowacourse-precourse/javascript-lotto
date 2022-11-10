class Validation {
  static amountInputValidate(input) {
    if (Number(input) > 100000) {
      throw new Error('[ERROR] 일주일 최대 구매 금액은 10만원입니다');
    }

    if (input[0] === '0') {
      throw new Error('[ERROR] 금액을 잘 못 입력하셨습니다');
    }
    input.split('').forEach((number) => {
      if (number.charCodeAt() >= 48 && number.charCodeAt() <= 57) {
        return;
      }
      throw new Error('[ERROR] 1~9 숫자만 입력가능합니다');
    });
  }
}

module.exports = Validation;

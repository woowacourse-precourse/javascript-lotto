class Validation {
  static amountInputValidate(input) {
    if (Number(input) > 100000) {
      throw new Error('[ERROR] 일주일 최대 구매 금액은 10만원입니다');
    }

    if (input[0] === '0') {
      throw new Error('[ERROR] 금액을 잘 못 입력하셨습니다');
    }
    input.split('').forEach((number) => {
      if (Number(number) >= 1 && Number(number) <= 9) {
        return;
      }
      throw new Error('[ERROR] 1~9 숫자만 입력가능합니다');
    });
  }

  static winningNumberValidate(input) {
    if (input.split(',').length !== 6) {
      throw new Error('[ERROR] 1~45 서로다른 6개 수를 입력해주세요');
    }
    input.forEach((number) => {
      if (Number(number) >= 1 && Number(number) <= 45) {
        return;
      }
      throw new Error('[ERROR] 1~45의 숫자만 입력가능합니다');
    });
  }
}

module.exports = Validation;

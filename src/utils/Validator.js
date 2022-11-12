class Validator {
  static isValidMoney(input) {
    if (input % 1000)
      throw new Error('[ERROR] 1,000원 단위의 금액을 입력해 주세요.');
  }
}

module.exports = Validator;

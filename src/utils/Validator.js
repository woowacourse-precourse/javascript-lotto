class NumberValidator {
  static isValidNumber(input) {
    if (isNaN(input)) throw new Error('[ERROR] 숫자를 입력해 주세요.');
  }
}

class MoneyValidator extends NumberValidator {
  constructor(args) {
    super(...args);
  }

  static validate(input) {
    this.isValidMoney(input);
    this.isValidNumber(input);
  }

  static isValidMoney(input) {
    if (input % 1000)
      throw new Error('[ERROR] 1,000원 단위의 금액을 입력해 주세요.');
  }
}

module.exports = { NumberValidator, MoneyValidator };

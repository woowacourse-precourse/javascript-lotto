class purchaseAmountValidator {
  constructor(amount) {
    purchaseAmountValidator.validate(amount);
    this.amount = amount;
  }

  static validate(amount) {
    if (/[^0-9]/g.test(amount)) {
      throw new Error('[ERROR] 구입 금액은 숫자만 입력 가능합니다.');
    }
    if (Number(amount) < 1000) {
      throw new Error('[ERROR] 구입 금액은 숫자만 입력 가능합니다.');
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = purchaseAmountValidator;

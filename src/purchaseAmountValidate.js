class PurchaseAmountValidate {
  constructor(amount) {
    this.validate(amount);
    this.validatedAmount = amount;
  }

  validate(amount) {
    if (/[^0-9]/g.test(amount)) {
      throw new Error('[ERROR] 구입 금액은 숫자만 공백없이 입력 가능합니다.');
    }
    if (Number(amount) < 1000) {
      throw new Error('[ERROR] 구입 최소 금액은 1000원 입니다.');
    }
    if (Number(amount) % 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위 입니다.');
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = PurchaseAmountValidate;

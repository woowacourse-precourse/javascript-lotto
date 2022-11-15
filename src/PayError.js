class PayError {
  constructor(payment) {
    this.validatePay(payment);
  }
  validatePay(payment) {
    const regExp = new RegExp("^[0-9]+$");
    if (!regExp.test(payment)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해주세요");
    }
    if (payment < 1000) {
      throw new Error("[ERROR] 최소금액은 1,000원 입니다.");
    }
    if (payment % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요");
    }
  }
}

module.exports = PayError;

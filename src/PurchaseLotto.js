class PurchaseLotto {
  #payment;

  constructor(payment) {
    this.isNumber(payment);
  }

  isNumber(payment) {
    if (payment.match(/^[0-9]+$/) == false) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자만 입력해주세요.");
    }
  }
}

module.exports = PurchaseLotto;

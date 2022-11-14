class PurchaseLotto {
  #payment;

  constructor(payment) {
    this.isValid(payment);
    this.#payment = payment;
  }

  isValid(payment) {
    if (payment % 1000 != 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000의 배수만 입력해주세요.");
    }
  }
}

module.exports = PurchaseLotto;

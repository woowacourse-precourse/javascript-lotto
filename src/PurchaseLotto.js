const MissionUtils = require("@woowacourse/mission-utils");

class PurchaseLotto {
  #payment;
  #totalLotto;

  constructor(payment) {
    this.payment = payment;
    this.isValid(payment);
    this.setPayment(payment);
    this.setTotalLotto(payment);
  }

  isValid(payment) {
    if (payment % 1000 != 0 || payment === 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000의 배수만 입력해주세요.");
    }
  }

  setPayment() {
    this.#payment = this.payment;
  }

  setTotalLotto() {
    this.#totalLotto = this.payment / 1000;
  }

  getPayment() {
    return this.#payment;
  }

  getTotalLotto() {
    return this.#totalLotto;
  }
}

module.exports = PurchaseLotto;

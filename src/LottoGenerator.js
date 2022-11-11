class LottoGenerator {
  #PRICE = 1000;

  constructor(payment) {
    this.payment = payment;
  }
  validatePayment(input) {
    const payment = parseInt(input);
    if (payment < 1000) {
      throw new Error("[ERROR] 돈이 부족합니다.");
    } else if (payment % this.#PRICE !== 0) {
      throw new Error("[ERROR] 1000으로 나누어 떨어지지 않습니다.");
    }
  }
}

module.exports = LottoGenerator;

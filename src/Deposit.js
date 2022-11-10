class Deposit {
  #priceOfLotto;
  #amount;

  constructor(amount) {
    this.#priceOfLotto = 1000;
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (amount % this.#priceOfLotto) {
      throw new Error('[ERROR] 로또 구입 금액은 1000원 단위만 가능합니다.');
    }
  }

  getQuantity() {
    return this.#amount / this.#priceOfLotto;
  }
}

module.exports = Deposit;

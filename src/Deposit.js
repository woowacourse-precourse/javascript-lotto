class Deposit {
  #priceOfLotto;
  #amount;

  constructor(amount) {
    this.#priceOfLotto = 1000;
    this.#amount = amount;
  }
}

module.exports = Deposit;

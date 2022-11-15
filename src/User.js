const { validatePayment } = require('./utils/inputValidate');
const App = require('./App');

class User {
  #payment;
  #quantity;
  #purchasedLotto;
  #profits;
  #winningPrize;

  constructor() {
    this.#payment = 0;
    this.#quantity = 0;
    this.#purchasedLotto = [];
    this.#profits = 0;
    this.#winningPrize = 0;
  }

  get payment() {
    return this.#payment;
  }

  set payment(payment) {
    validatePayment(payment);
    this.#payment = payment;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(quantity) {
    this.#quantity = quantity;
  }

  get purchasedLotto() {
    return this.#purchasedLotto;
  }

  get profits() {
    return this.#profits;
  }

  set profits(profits) {
    this.#profits = profits;
  }

  get winningPrize() {
    return this.#winningPrize;
  }

  set winningPrize(winningPrize) {
    this.#winningPrize = winningPrize;
  }
}

module.exports = User;

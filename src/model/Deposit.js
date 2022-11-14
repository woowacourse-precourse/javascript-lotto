const { PRICE_OF_LOTTO } = require('../constants');
const Validator = require('./Validator');

class Deposit {
  #amount;

  constructor(amount) {
    Validator.validateNaN(amount);
    Validator.validateAmount(amount);
    this.#amount = Number(amount);
  }

  get amount() {
    return this.#amount;
  }

  get quantity() {
    return this.#amount / PRICE_OF_LOTTO;
  }
}

module.exports = Deposit;

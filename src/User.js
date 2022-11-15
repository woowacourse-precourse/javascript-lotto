const { ERROR } = require('./utils/messages');

class User {
  #amount;
  #numbersList;

  setAmount(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  validateInteger(amount) {
    const regex = /^[0-9]+$/;

    if (!regex.test(amount)) {
      throw new Error(ERROR.INVALID_INTEGER);
    }
  }

  validateUnit(amount) {
    if (Number(amount) % 1000 !== 0) {
      throw new Error(ERROR.INVALID_UNIT);
    }
  }

  #validate(amount) {
    this.validateInteger(amount);
    this.validateUnit(amount);
  }

  getAmount() {
    return this.#amount;
  }

  setNumbersList(numbersList) {
    this.#numbersList = numbersList;
  }

  getNumbersList() {
    return this.#numbersList;
  }
}

module.exports = User;

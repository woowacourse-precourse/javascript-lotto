// @ts-check

const { ERROR } = require('./utils/messages');

class User {
  /** @type {number} */
  #amount;

  /** @type {number[][]} */
  #numbersList;

  /**
   *
   * @param {string} amount
   */
  validateAmount(amount) {
    const regex = /^[0-9]+$/;

    if (!regex.test(amount)) {
      throw new Error(ERROR.INVALID_INTEGER);
    }

    if (Number(amount) % 1000 !== 0) {
      throw new Error(ERROR.INVALID_UNIT);
    }
  }

  /**
   *
   * @param {string} amount
   */
  setAmount(amount) {
    this.validateAmount(amount);
    this.#amount = Number(amount);
  }

  /**
   *
   * @returns {number}
   */
  getAmount() {
    return this.#amount;
  }

  /**
   *
   * @param {number[][]} numbersList
   */
  setNumbersList(numbersList) {
    this.#numbersList = numbersList;
  }

  /**
   *
   * @returns {number[][]}
   */
  getNumbersList() {
    return this.#numbersList;
  }
}

module.exports = User;

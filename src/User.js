// @ts-check

const Utils = require('./Utils.js');
const { LOTTO_PRICE } = require('./const.js');

class User {
  #numbersList;

  /**
   *
   * @param {number} amount
   */
  constructor(amount) {
    this.#numbersList = this.generateNumbersList(amount);
  }

  /**
   *
   * @param {number} amount
   * @returns {number[][]}
   */
  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / LOTTO_PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(1, 45, 6);
      list.push(randomNumbers.sort((a, b) => a - b));
    }

    return list;
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

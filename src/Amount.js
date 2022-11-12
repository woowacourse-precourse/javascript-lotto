// @ts-check

const Utils = require('./Utils.js');

class Amount {
  /** @type {number} */
  #amount;

  /**
   *
   * @param {number} amount
   */
  #validate(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error('[ERROR] 금액은 1,000 단위의 정수여야 합니다.');
    }

    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위여야 합니다.');
    }
  }

  /**
   *
   * @param {string} message
   */
  async setInputAmount(message) {
    const amount = await Utils.readLine(message);

    this.#validate(Number(amount));
    this.#amount = Number(amount);
  }

  /**
   *
   * @returns {number}
   */
  getAmount() {
    return this.#amount;
  }
}

module.exports = Amount;

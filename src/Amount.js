// @ts-check

const Utils = require('./Utils.js');
const { INPUT_AMOUNT_MESSAGE } = require('./const.js');

class Amount {
  /** @type {number} */
  #amount;

  async setInputAmount() {
    const amount = await Utils.readLine(INPUT_AMOUNT_MESSAGE);
    this.validate(Number(amount));
    this.#amount = Number(amount);
  }

  /**
   *
   * @param {number} amount
   */
  validate(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error('[ERROR] 금액은 1,000 단위의 정수여야 합니다.');
    }

    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위여야 합니다.');
    }
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

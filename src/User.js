// @ts-check

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
      throw new Error('[ERROR] 금액은 정수여야 합니다.');
    }

    if (Number(amount) % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위여야 합니다.');
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

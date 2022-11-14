// @ts-check

class Amount {
  #amount;

  /**
   *
   * @param {string} inputAmount
   */
  constructor(inputAmount) {
    this.validate(inputAmount);
    this.#amount = Number(inputAmount);
  }

  /**
   *
   * @param {string} amount
   */
  validate(amount) {
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
   * @returns {number}
   */
  getAmount() {
    return this.#amount;
  }
}

module.exports = Amount;

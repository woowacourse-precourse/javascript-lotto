const { Console } = require("@woowacourse/mission-utils");

class InputAmount {
  #inputAmount;
  LOTTO_PRICE = 1000;

  constructor(input) {
    this.validate(input);
    this.#inputAmount = input;
  }

  /**
   * input이 천 단위의 값인지 확인합니다.
   * @param {number} input
   */
  validate(input) {
    const inputAmount = input;
    const error = new Error("[ERROR] 구입금액은 천 원 단위여야 합니다.");
    if (
      inputAmount < this.LOTTO_PRICE ||
      inputAmount / this.LOTTO_PRICE !==
        Math.floor(inputAmount / this.LOTTO_PRICE)
    )
      throw error;
    Console.print(`\n${inputAmount / this.LOTTO_PRICE}개를 구매했습니다.`);
  }
}

module.exports = InputAmount;

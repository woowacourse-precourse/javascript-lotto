const { Console } = require("@woowacourse/mission-utils");

class InputAmount {
  #inputAmount;

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
      inputAmount < 1000 ||
      inputAmount / 1000 !== Math.floor(inputAmount / 1000)
    )
      throw error;
    Console.print(`\n${inputAmount / 1000}개를 구매했습니다.`);
  }
}

module.exports = InputAmount;

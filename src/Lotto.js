const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    this.validateNumbers(numbers);
    this.#numbers = numbers.map((x) => Number(x));
  }

  validateNumbers(numbers) {}
}

module.exports = Lotto;

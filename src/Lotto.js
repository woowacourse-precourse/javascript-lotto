const validate = require("./validation/validation");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validate.winningNumbers(numbers);
  }

  sortWinningNumber() {
    this.#numbers.sort((a, b) => a - b);
  }

  printWinningNumber() {
    this.sortWinningNumber();
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

module.exports = Lotto;

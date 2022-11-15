const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./constant/constant");
const Validation = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  compare(winningNumbers, bonusNumber) {
    let match = this.#numbers.reduce(
      (match, number) => (match += winningNumbers.includes(number) ? 1 : 0),
      0
    );

    if (match === 5 && this.#numbers.includes(bonusNumber)) {
      match = 5.5;
    }

    return match;
  }
}

module.exports = Lotto;

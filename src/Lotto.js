const { Console } = require("@woowacourse/mission-utils");
const checkValidation = require("./errors/checkValidation");
const existError = require("./errors/existError");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const { errorMessage } = checkValidation.numbers(numbers, "로또 번호");
    if (errorMessage) existError(errorMessage);
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
  getResult(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return 1;
    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;

    return 8 - count;
  }
}

module.exports = Lotto;

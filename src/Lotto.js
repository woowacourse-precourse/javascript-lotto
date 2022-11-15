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

  getResult(winningNumberList, bonusNumber) {
    let correctCount = 0;
    this.#numbers.forEach((el) => {
      if (winningNumberList.includes(el)) correctCount += 1;
    });
    if (correctCount < 3) return null;
    if (correctCount === 6) return 1;
    if (correctCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    return 8 - correctCount;
  }
}

module.exports = Lotto;

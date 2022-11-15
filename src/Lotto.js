const { Console } = require("@woowacourse/mission-utils");
const Checker = require("./Checker");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checker = new Checker();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checker.checkSix(numbers);
    this.checker.validateMainNumArray(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

module.exports = Lotto;

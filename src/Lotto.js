const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./constant/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.wrongQuantity);
    }
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  compare(winningNumber, bonusNumber) {
    let match = 0;
    this.#numbers.forEach((number) => {
      if (winningNumber.includes(number)) {
        match += 1;
      }
    });

    if (match === 5) {
      if (this.#numbers.includes(bonusNumber)) {
        match = 5.5;
      }
    }

    return match;
  }
}

module.exports = Lotto;

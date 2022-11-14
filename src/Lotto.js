const { checkWinningNumber } = require("./Validation")

class Lotto {
  #numbers;

  constructor(numbers) {
    checkWinningNumber(numbers);
    this.#numbers = numbers;
  }

  getWinningNumber() {
    return this.#numbers.split(",").map((item) => Number(item));
  }

}
module.exports = Lotto;

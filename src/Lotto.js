const inputBudget = require("./View");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  divideBudget(budget) {
    return Math.floor(budget / 1000);
  }
}

module.exports = Lotto;

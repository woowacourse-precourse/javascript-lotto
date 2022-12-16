const Validation = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validateNumbers(numbers);
    this.#numbers = numbers;
  }
  //이거 더 괜찮게 할 방법없나?
  getLottoString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  matchCount(winningNumbers, bonusNumber) {
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

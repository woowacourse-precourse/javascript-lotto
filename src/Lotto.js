const { ERROR } = require("./lib/error");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    ERROR.CHECK_LOTTO(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  countWinNumbers(winningNumbers, bonusNumber) {
    let winCount = this.#numbers.filter((x) =>
      winningNumbers.includes(x)
    ).length;
    let isBonus = this.#numbers.includes(bonusNumber);

    return { winCount: winCount, isBonus: isBonus };
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

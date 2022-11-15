const { MESSAGES, WIN_CONDITIONS, RESULT_MESSAGE } = require("./lib/constant");
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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

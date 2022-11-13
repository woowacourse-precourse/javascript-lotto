const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {}

  printLotto() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getRank(winningNumbers, bonusNum) {
    const intersection = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    );

    if (intersection.length === 6) return 1;

    if (intersection.length === 5 && this.#numbers.includes(bonusNum)) return 2;

    if (intersection.length < 3) return null;

    return 8 - winingNumbers.length;
  }
}

module.exports = Lotto;

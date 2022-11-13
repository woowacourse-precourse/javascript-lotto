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

    if (
      intersection.length === 5 &&
      Array.from(this.#numbers).includes(bonusNum)
    )
      return 2;

    if (intersection.length < 3) return 0;

    return 8 - intersection.length;
  }
}

module.exports = Lotto;

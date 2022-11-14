const { Console } = require("@woowacourse/mission-utils");
const { RANKING } = require("./constants/rule");
const Validation = require("./validator/Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const validation = new Validation();
    validation.isValidLottoNumber(numbers);
  }

  printNumbers() {
    this.#numbers.sort((a, b) => (a > b ? 1 : -1));

    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getResult(winningNumberList, bonusNumber) {
    let compareCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumberList.includes(number)) compareCount++;
    });

    if (compareCount === 6) return RANKING.FIRST;
    if (compareCount === 5 && this.#numbers.includes(bonusNumber))
      return RANKING.SECOND;
    if (compareCount === 5) return RANKING.THIRD;
    if (compareCount === 4) return RANKING.FOURTH;
    if (compareCount === 3) return RANKING.FIFTH;
    if (compareCount < 3) return null;
  }
}

module.exports = Lotto;

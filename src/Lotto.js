const { Console } = require("@woowacourse/mission-utils");
const { RANKING, MATCH } = require("./constants/rule");
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

    if (compareCount === MATCH.SIX) return RANKING.FIRST;
    if (compareCount === MATCH.FIVE && this.#numbers.includes(bonusNumber))
      return RANKING.SECOND;
    if (compareCount === MATCH.FIVE) return RANKING.THIRD;
    if (compareCount === MATCH.FOUR) return RANKING.FOURTH;
    if (compareCount === MATCH.THREE) return RANKING.FIFTH;
    if (compareCount < MATCH.THREE) return null;
  }
}

module.exports = Lotto;

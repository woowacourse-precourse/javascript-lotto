const { Console } = require("@woowacourse/mission-utils");
const { ERROR_LOTTO } = require("./constants/messages");
const { RANKING } = require("./constants/rule");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isNumbersRange(numbers)) throw new Error(ERROR_LOTTO.RANGE);

    if (numbers.length !== 6) throw new Error(ERROR_LOTTO.LENGTH);

    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR_LOTTO.DUPLICATED);

    if (!this.isNumbersType(numbers)) throw new Error(ERROR_LOTTO.TYPE);
  }

  isNumbersRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  isNumbersType(numbers) {
    return numbers.every((number) => !isNaN(number));
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

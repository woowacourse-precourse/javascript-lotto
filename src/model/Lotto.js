const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("../Validate");
const { RANK, WINNING_COUNT } = require("../utils/constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate = new Validate();
    this.validate.checkLottoInput(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validate.checkLottoInput(numbers);
  }

  printLotto() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getRank(winningNumbers, bonusNum) {
    const intersection = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    );

    if (intersection.length === WINNING_COUNT.SIX) return RANK.FIRST;

    if (intersection.length === WINNING_COUNT.FIVE) {
      if (Array.from(this.#numbers).includes(bonusNum)) return RANK.SECOND;
      return RANK.THIRD;
    }

    if (intersection.length === WINNING_COUNT.FOUR) return RANK.FOURTH;

    if (intersection.length === WINNING_COUNT.THREE) return RANK.FIFTH;

    return 0;
  }
}

module.exports = Lotto;

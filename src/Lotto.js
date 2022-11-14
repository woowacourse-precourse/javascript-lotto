const { validateWiningNumber } = require("./utils/validator");
const { Console } = require("@woowacourse/mission-utils");
const { RANK_TABLE } = require("./constraints");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateWiningNumber(numbers);
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  compareNumbers(winningNumbers, bonusNumber) {
    const matchedNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    const match_bonus = +this.#numbers.includes(bonusNumber);
    return this.getRank(matchedNumbers, match_bonus);
  }

  getRank(matchedNumbers, match_bonus) {
    const match_cnt = matchedNumbers.length + match_bonus;
    return RANK_TABLE[match_cnt];
  }
}

module.exports = Lotto;

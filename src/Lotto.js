const { Console, Random } = require('@woowacourse/mission-utils');
const { RANK } = require('./Constant');
const { FORMAT, LOTTO } = require('./Setting');
const Validate = require('./Validate');

const validate = new Validate();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers ?? this.generate();
    validate.lotto(this.#numbers);
  }

  generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT
    );

    return numbers.sort((num1, num2) => num1 - num2);
  }

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  match(winningNumbers, bonusNumber) {
    const numbers = this.#numbers;
    const intersection = numbers.filter((num) => winningNumbers.has(num));

    this.matchCount = intersection.length;
    this.hasBonus = numbers.includes(bonusNumber);
    this.setRank();
  }

  setRank() {
    const { matchCount, hasBonus } = this;
    let matchInfo = `${matchCount}${FORMAT.MATCH}`;

    if (matchCount === 5 && hasBonus) {
      matchInfo += FORMAT.MATCH_BONUS;
    }
    this.rank = RANK[matchInfo] ?? 0;
  }
}

module.exports = Lotto;

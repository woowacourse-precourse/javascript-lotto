const { Console, Random } = require('@woowacourse/mission-utils');
const { FORMAT, RANK } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers ?? this.generate();
    this.validate(this.#numbers);
  }

  generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return (numbers.sort((num1, num2) => num1 - num2));
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
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

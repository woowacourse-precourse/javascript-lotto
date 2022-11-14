const { FORMAT, RANK } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  matchNumbers(winningNumbers, bonusNumber) {
    const numbers = this.#numbers;
    const intersection = numbers.filter((num) => winningNumbers.has(num));

    this.matchCount = intersection.length;
    this.hasBonus = numbers.includes(bonusNumber);
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

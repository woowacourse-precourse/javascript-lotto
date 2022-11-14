const { UNIT, FORMAT, PRIZE } = require('./Const');

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

  getMatchInformation() {
    const { matchCount, hasBonus } = this;
    let matchInfo = `${matchCount}${FORMAT.MATCH}`;

    if (matchCount === 5 && hasBonus) {
      matchInfo += FORMAT.MATCH_BONUS;
    }
    this.prize = PRIZE[matchInfo];
    this.formatPrize = this.prize.toLocaleString(FORMAT.LOCALE);
    this.matchInfo = `${matchInfo} (${this.formatPrize}${UNIT.MONEY})`;
  }
}

module.exports = Lotto;

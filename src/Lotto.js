class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.prizes = Object.freeze({
      '0개 일치': 0,
      '1개 일치': 0,
      '2개 일치': 0,
      '3개 일치': 5000,
      '4개 일치': 50000,
      '5개 일치': 1500000,
      '5개 일치, 보너스 볼 일치': 30000000,
      '6개 일치': 2000000000,
    });
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
    const { matchCount, hasBonus, prizes } = this;
    let matchInfo = `${matchCount}개 일치`;

    if (matchCount === 5 && hasBonus) {
      matchInfo += ', 보너스 볼 일치';
    }
    this.prize = prizes[matchInfo];
    this.formatPrize = this.prize.toLocaleString('ko-KR');
    this.matchInfo = `${matchInfo} (${this.formatPrize}원)`;
  }
}

module.exports = Lotto;

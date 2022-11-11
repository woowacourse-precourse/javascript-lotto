class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.prizes = Object.freeze({
      꽝: '0',
      '3개 일치': '5,000',
      '4개 일치': '50,000',
      '5개 일치': '1,500,000',
      '5개 일치, 보너스 볼 일치': '30,000,000',
      '6개 일치': '2,000,000,000',
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  matchNumbers(winningNumbers, bonusNumber) {
    const { numbers } = this;
    const intersection = numbers.filter((num) => winningNumbers.has(num));

    this.matchCount = intersection.length;
    this.hasBonus = numbers.includes(bonusNumber);
  }

  getMatchInformation() {
    const { matchCount, hasBonus } = this;
    let matchInfo = `${matchCount}개 일치`;

    if (matchCount === 5 && hasBonus) {
      matchInfo += ', 보너스 볼 일치';
    }
    this.prize = prizes[matchInfo];
    this.matchInfo = `${matchInfo} (${this.prize}원)`;
  }
}

module.exports = Lotto;

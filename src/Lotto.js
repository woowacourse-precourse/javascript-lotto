class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.winningCount = 0;
    this.bonusCount = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  plusWinningCount() {
    this.winningCount += 1;
  }

  plusBonusCount() {
    this.bonusCount += 1;
  }
}

module.exports = Lotto;

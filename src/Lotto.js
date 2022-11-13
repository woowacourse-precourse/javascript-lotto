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

  // TODO: 추가 기능 구현
  getTicketNumbers() {
    return this.#numbers;
  }

  calculateNumbers(answerNumbers, bonusNumber) {
    const hit = answerNumbers.filter((number) => this.#numbers.includes(number)).length;
    const bonus = this.#numbers.includes(bonusNumber);
    return this.figureLotteryRank(hit, bonus);
  }

  figureLotteryRank(hit, bonus) {
    if (hit === 6) {
      return 'FIRST';
    }
    if (hit === 5 && bonus === true) {
      return 'SECOND';
    }
    if (hit === 5) {
      return 'THIRD';
    }
    if (hit === 4) {
      return 'FOURTH';
    }
    if (hit === 3) {
      return 'FIFTH';
    }
    return null;
  }
}

module.exports = Lotto;

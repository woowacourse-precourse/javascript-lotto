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

  getStatistics({ myLottos, bonusNumber }) {}

  checkLotto({ lotto, bonusNumber }) {
    const isCorrectNumbers = number => this.#numbers.indexOf(number) !== -1;
    const correctNumbers = lotto.filter(number => isCorrectNumbers(number));
    const iscorrectBonusNumber = this.#numbers.indexOf(bonusNumber) !== -1;

    return { iscorrectBonusNumber, count: correctNumbers.length };
  }
}

module.exports = Lotto;

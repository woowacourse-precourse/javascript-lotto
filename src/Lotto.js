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

  checkLotto({ lotto, bonusNumber }) {
    const isCorrectNumbers = number => this.#numbers.indexOf(number) !== -1;
    const correctNumbersCount = lotto.filter(number => isCorrectNumbers(number)).length;
    const isCorrectBonusNumber = this.#numbers.indexOf(bonusNumber) !== -1;
    const isFail = correctNumbersCount < 3;
    const isSecond = correctNumbersCount === 5 && isCorrectBonusNumber;
    const prize = { 3: 'fifth', 4: 'fourth', 5: 'thrid', 6: 'first' };

    return isFail ? 'fail' : isSecond ? 'second' : prize[correctNumbersCount];
  }

  getStatistics({ myLottos, bonusNumber }) {
    const resultLotto = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0, fail: 0 };

    myLottos.forEach(lotto => {
      const myPrize = this.checkLotto({ lotto, bonusNumber });
      resultLotto[myPrize] += 1;
    });

    console.log(resultLotto);
  }
}

module.exports = Lotto;

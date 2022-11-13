const { print } = require('./util');
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

    return resultLotto;
  }

  printStatistics({ myLottos, bonusNumber }) {
    const resultLotto = this.getStatistics({ myLottos, bonusNumber });

    const PRIZE_PRINT_TEMPLETE = {
      fifth: '3개 일치 (5,000원)',
      fourth: '4개 일치 (50,000원)',
      third: '5개 일치 (1,500,000원)',
      second: '5개 일치, 보너스 볼 일치 (30,000,000원)',
      first: '6개 일치 (2,000,000,000원)',
    };

    print('당첨 통계\n---');
    Object.keys(PRIZE_PRINT_TEMPLETE).forEach(prize =>
      print(`${PRIZE_PRINT_TEMPLETE[prize]} - ${resultLotto[prize]}개`),
    );
  }
}

module.exports = Lotto;

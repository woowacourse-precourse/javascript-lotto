const { PRIZE_NAME, PRIZE_REWARD, DIGIT_NUMBER, LOTTO_PAYMENT } = require('./const.js');
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
    const prizeIndex = Math.max(correctNumbersCount - 2, 0);
    const isFail = prizeIndex === 0;
    const isSecond = correctNumbersCount === 5 && isCorrectBonusNumber;

    return isFail ? 'fail' : isSecond ? 'second' : PRIZE_NAME[prizeIndex];
  }

  getStatistics({ myLottos, bonusNumber }) {
    const resultLotto = {};

    myLottos.forEach(lotto => {
      const myPrize = this.checkLotto({ lotto, bonusNumber });
      const isUndefined = resultLotto[myPrize];

      resultLotto[myPrize] = isUndefined ? 1 : resultLotto[myPrize] + 1;
    });

    return resultLotto;
  }

  getRateOfReturn({ payment, resultLotto }) {
    const prizes = Object.keys(resultLotto);
    const sumReward = prizes.reduce((prevSumReward, prize) => {
      const prizeReward = PRIZE_REWARD[prize];
      const prizeCount = resultLotto[prize];

      return (prevSumReward += prizeReward * prizeCount);
    }, 0);
    const rate = (Math.round((sumReward - payment) / payment) * DIGIT_NUMBER) / DIGIT_NUMBER;

    return rate;
  }

  printStatistics({ myLottos, bonusNumber }) {
    const resultLotto = this.getStatistics({ myLottos, bonusNumber });
    const payment = myLottos.length * LOTTO_PAYMENT;

    print('당첨 통계\n---');
    Object.keys(PRIZE).forEach(rank => print(templeteLotto(rank, resultLotto[rank])));
    print(`총 수익률은 ${this.getRateOfReturn({ payment, resultLotto })}%입니다.`);
  }
}

module.exports = Lotto;

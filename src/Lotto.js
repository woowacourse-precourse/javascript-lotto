const { PRIZE_NAME, PRIZE_REWARD, LOTTO_PAYMENT, ORDER_OF_PRINT } = require('./const.js');
const { print, templeteLotto } = require('./util.js');

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
    const resultLotto = { first: 0, second: 0, third: 0, forth: 0, fifth: 0, fail: 0 };

    myLottos.forEach(lotto => {
      const myPrize = this.checkLotto({ lotto, bonusNumber });
      resultLotto[myPrize] += 1;
    });

    return resultLotto;
  }

  getRateOfReturn({ payment, resultLotto }) {
    const sumReward = ORDER_OF_PRINT.reduce((prevSumReward, prize) => {
      const prizeReward = PRIZE_REWARD[prize];
      const prizeCount = resultLotto[prize];

      return (prevSumReward += prizeReward * prizeCount);
    }, 0);
    const rate = ((sumReward * 100) / payment).toFixed(1);

    return rate;
  }

  printStatistics({ myLottos, bonusNumber }) {
    const resultLotto = this.getStatistics({ myLottos, bonusNumber });
    const payment = myLottos.length * LOTTO_PAYMENT;

    print('당첨 통계\n---');
    ORDER_OF_PRINT.forEach(prize => print(templeteLotto(prize, resultLotto[prize])));
    print(`총 수익률은 ${this.getRateOfReturn({ payment, resultLotto })}%입니다.`);
  }
}

module.exports = Lotto;

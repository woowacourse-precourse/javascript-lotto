const { print } = require('./utils');
const { LOTTO_PRICE, RANK_COUNT, RANK_REWARD } = require('./var');
const ranks = ['fail', 'fifth', 'forth', 'third', 'first'];
const {Console} = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw  new Error("[ERROR] 로또 번호가 중복됩니다.");
    }
  }

  checkingLottoNumber({ lotto, bonusNumber }) {
    const isCorrectNumbers = number => this.#numbers.indexOf(number) !== -1;
    const correctNumbersCount = lotto.filter(number => isCorrectNumbers(number)).length;
    const isCorrectBonusNumber = this.#numbers.indexOf(bonusNumber) !== -1;
    const rank = Math.max(correctNumbersCount - 2, 0);
    const isFail = rank === 0;
    const isSecond = correctNumbersCount === 5 && isCorrectBonusNumber;
    return isFail ? 'fail' : isSecond ? 'second' : ranks[rank];
  }

  countStatistics(madeLotto, bonusNumber) {
    const resultLotto = { first: 0, second: 0, third: 0, forth: 0, fifth: 0, fail: 0 };
    Array.from(madeLotto).forEach(lotto => {
      const rank = this.checkingLottoNumber({ lotto, bonusNumber });
      resultLotto[rank] += 1;
    });

    return resultLotto;
  }

  resultLotto(prize, count) {
    const correctCount = RANK_COUNT[prize];
    const rewardLocalString = RANK_REWARD[prize].toLocaleString();

    if (prize === 'second')
      return `${correctCount}개 일치, 보너스 볼 일치 (${rewardLocalString}원) - ${count}개`;
    return `${correctCount}개 일치 (${rewardLocalString}원) - ${count}개`;
  };

  yieldRate({ price, result, orderRank }) {
    const totalPrice = orderRank.reduce((prevSumReward, prize) => {
      const prizeReward = RANK_REWARD[prize];
      const prizeCount = result[prize];
      prevSumReward += prizeReward * prizeCount;
      return prevSumReward;
    }, 0);
    const rating = ((totalPrice * 100) / price).toFixed(1);
    return rating;
  }

  statistics(madeLotto, bonusNumber) {
    const orderRank = ['fifth', 'forth', 'third', 'second', 'first'];
    print('당첨 통계\n---');
    const result = this.countStatistics(madeLotto, bonusNumber);
    const price = madeLotto.length * LOTTO_PRICE;
    orderRank.forEach(rank => {
      print(this.resultLotto(rank, result[rank]))
    });
    print(`총 수익률은 ${this.yieldRate({price, result, orderRank})}%입니다`);
    Console.close();
  }
}

module.exports = Lotto;

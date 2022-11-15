const { Console } = require('@woowacourse/mission-utils');
const { FIVE, LOTTO_MATCHES, LOTTO_PRIZE, LOTTO_PRICE, RESULT_MESSAGE } = require('./Constants');

class LottoResult {
  constructor() {
    this.profitRate = 0;
    this.lottoMatchCounter = {
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
      out: 0,
    };
  }

  print(winningNumbers, lotteries) {
    this.countMatching(winningNumbers, lotteries);
    this.calculateProfitRate(lotteries.length * LOTTO_PRICE);
    this.printResult();
  }

  countMatching(winningNumbers, lotteries) {
    lotteries.forEach((lottery) => {
      const count = LottoResult.getMatchCount(winningNumbers, new Set(lottery));
      this.lottoMatchCounter[count] += 1;
    });
  }

  static getMatchCount({ winning, bonus }, lottery) {
    const count = winning.filter((number) => lottery.has(number)).length;
    if (count === FIVE && lottery.has(bonus)) {
      return LOTTO_MATCHES.fiveWithBonus;
    }
    return LOTTO_MATCHES[count];
  }

  calculateProfitRate(money) {
    this.profitRate = ((this.calculateProfit() / money) * 100).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  calculateProfit() {
    return Object.entries(this.lottoMatchCounter).reduce((profit, [matching, count]) => {
      const cumulativeProfit = profit + LOTTO_PRIZE[matching] * count;
      return cumulativeProfit;
    }, 0);
  }

  printResult() {
    const { three, four, five, fiveWithBonus, six } = this.lottoMatchCounter;

    Console.print(RESULT_MESSAGE.beginning);
    Console.print(RESULT_MESSAGE.three(three));
    Console.print(RESULT_MESSAGE.four(four));
    Console.print(RESULT_MESSAGE.five(five));
    Console.print(RESULT_MESSAGE.fiveWithBonus(fiveWithBonus));
    Console.print(RESULT_MESSAGE.six(six));
    Console.print(RESULT_MESSAGE.profitRate(this.profitRate));
  }
}

module.exports = LottoResult;

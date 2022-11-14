const { Console } = require('@woowacourse/mission-utils');
const {
  EA,
  FIVE,
  LOTTO_MATCHES,
  LOTTO_PRIZE,
  RESULT_MESSAGE,
  LOTTO_PRICE,
} = require('./Constants');

class LottoResult {
  constructor() {
    this.profit = 0;
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

  calculateProfit() {
    return Object.entries(this.lottoMatchCounter).reduce((profit, [matching, count]) => {
      const cumulativeProfit = profit + LOTTO_PRIZE[matching] * count;
      return cumulativeProfit;
    }, 0);
  }

  calculateProfitRate(money) {
    this.profitRate = ((this.calculateProfit() / money) * 100).toFixed(1);
  }

  printResult() {
    const { three, four, five, fiveWithBonus, six } = this.lottoMatchCounter;

    Console.print(RESULT_MESSAGE.beginning);
    Console.print(`${RESULT_MESSAGE.three}${three}${EA}`);
    Console.print(`${RESULT_MESSAGE.four}${four}${EA}`);
    Console.print(`${RESULT_MESSAGE.five}${five}${EA}`);
    Console.print(`${RESULT_MESSAGE.fiveWithBonus}${fiveWithBonus}${EA}`);
    Console.print(`${RESULT_MESSAGE.six}${six}${EA}`);
    Console.print(`총 수익률은 ${this.profitRate}%입니다.`);
  }
}

module.exports = LottoResult;

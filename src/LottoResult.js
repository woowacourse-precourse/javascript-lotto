const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MATCHES, LOTTO_PRIZE, EA, RESULT_MESSAGE } = require('./Constants');

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

  print(winningNumbers, lotteries, money) {
    this.countMatching(winningNumbers, lotteries);
    this.calculateProfitRate(money);
    this.printResult();
  }

  countMatching(winningNumbers, lotteries) {
    lotteries.forEach((lottery) => {
      const count = LottoResult.getMatchCount(winningNumbers, new Set(lottery));
      this.lottoMatchCounter[count] += 1;
      this.profit += LOTTO_PRIZE[count];
    });
  }

  static getMatchCount({ winning, bonus }, lottery) {
    const count = winning.filter((number) => lottery.has(number)).length;
    if (count === 5 && lottery.has(bonus)) {
      return LOTTO_MATCHES.fiveWithBonus;
    }
    return LOTTO_MATCHES[count];
  }

  calculateProfitRate(money) {
    this.profitRate = ((this.profit / money) * 100).toFixed(1);
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
    Console.close();
  }
}

module.exports = LottoResult;

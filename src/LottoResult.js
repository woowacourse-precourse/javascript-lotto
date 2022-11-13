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

  print(winningNumber, lotteries, money) {
    this.countMatching(winningNumber, lotteries);
    this.calculateProfitRate(money);
    this.printResult();
  }

  countMatching(winningNumber, lotteries) {
    lotteries.forEach((lottery) => {
      const count = LottoResult.getMatchCount(winningNumber, lottery);
      this.lottoMatchCounter[count] += 1;
      this.profit += LOTTO_PRIZE[count];
    });
  }

  static getMatchCount({ winning, bonus }, lottery) {
    const lotterySet = new Set(lottery);
    const count = winning.filter((number) => lotterySet.has(number)).length;

    if (count === 5 && lotterySet.has(bonus)) {
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

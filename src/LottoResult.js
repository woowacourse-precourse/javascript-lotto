const { Console } = require("@woowacourse/mission-utils");
const { FIVE, LOTTO_MATCHES, LOTTO_PRIZE, LOTTO_PRICE, RESULT_MESSAGE } = require("./constants");

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
    this.countMatch(winningNumbers, lotteries);
    this.setProfit(lotteries.length * LOTTO_PRICE);
    this.printResult();
  }

  countMatch(winningNumbers, lotteries) {
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

  setProfit(money) {
    this.profitRate = ((this.calculateProfit() / money) * 100).toFixed(1);
  }

  calculateProfit() {
    return Object.entries(this.lottoMatchCounter).reduce((profit, [matching, count]) => {
      const cumulativeProfit = profit + LOTTO_PRIZE[matching] * count;
      return cumulativeProfit;
    }, 0);
  }

  printResult() {
    const { three, four, five, fiveWithBonus, six } = this.lottoMatchCounter;

    Console.print(RESULT_MESSAGE.START);
    Console.print(RESULT_MESSAGE.THREE(three));
    Console.print(RESULT_MESSAGE.FOUR(four));
    Console.print(RESULT_MESSAGE.FIVE(five));
    Console.print(RESULT_MESSAGE.FIVE_BONUS(fiveWithBonus));
    Console.print(RESULT_MESSAGE.SIX(six));
    Console.print(RESULT_MESSAGE.PROFIT(this.profitRate));
  }
}

module.exports = LottoResult;

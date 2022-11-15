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
    this.countMatching(winningNumbers, lotteries);
    this.calculateProfitRate(lotteries.length * LOTTO_PRICE);
    this.printResult();
  }
}

module.exports = LottoResult;

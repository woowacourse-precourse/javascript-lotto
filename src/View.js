const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("./utils/constants");
const { getProfitRate, roundingNumber } = require("./utils/utils");

class View {
  static lottoCount(lottoCount) {
    Console.print(PRINT_MESSAGE.PURCHASE_COUNT(lottoCount));
  }

  static lottoNumbers(totalNumbers) {
    totalNumbers.forEach((numbers) => {
      Console.print(PRINT_MESSAGE.LOTTO_NUMBERS(numbers));
    });
  }

  static winningStatistics(winningRanking) {
    Console.print("당첨통계");
    Console.print("---");
    winningRanking.forEach((winningHistory) => {
      Console.print(`${PRINT_MESSAGE.WINNING_HISTORY(winningHistory)}`);
    });
  }

  static profitRate(purchaseAmout, totalRevenue) {
    const profitRate = getProfitRate(purchaseAmout, totalRevenue);
    Console.print(PRINT_MESSAGE.PROFIT_RATE(roundingNumber(profitRate)));
  }
}

module.exports = View;

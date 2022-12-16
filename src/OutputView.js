const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MEESAGE, NEW_LINE } = require("./constant/constant");

const OutputView = {
  printPurchaseNumber(num) {
    Console.print(RESULT_MEESAGE.purchase(num));
  },

  print(message) {
    Console.print(message);
  },

  printResult(result) {
    Console.print(RESULT_MEESAGE.lottoResult);
    Console.print(
      RESULT_MEESAGE.match3(result[3]) +
        NEW_LINE +
        RESULT_MEESAGE.match4(result[4]) +
        NEW_LINE +
        RESULT_MEESAGE.match5(result[5]) +
        NEW_LINE +
        RESULT_MEESAGE.match5andBonus(result[5.5]) +
        NEW_LINE +
        RESULT_MEESAGE.match6(result[6])
    );
  },

  printProfitRatio(ratio) {
    Console.print(RESULT_MEESAGE.profit(ratio));
  },
};

module.exports = OutputView;

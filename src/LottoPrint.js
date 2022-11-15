const { Console } = require("@woowacourse/mission-utils");
const { WINNING, PRINT } = require("./lib/library");

class LottoPrint {
  printWinResult(result) {
    Object.keys(result).forEach((rank) => {
      Console.print(WINNING.MENT[rank](result[rank]));
    });

    return this;
  }

  printGainPercent(gainPercent) {
    Console.print(PRINT.GAIN_PECENT(gainPercent));
    return this;
  }
}

module.exports = LottoPrint;

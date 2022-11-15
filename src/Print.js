const { Console } = require("@woowacourse/mission-utils");
const { NOTICE_MESSAGE } = require("./Constants");
const { Create } = require("./Utils");

class Print {
  static purchasedLottoAmount(purchased) {
    Console.print("\n" + purchased.amount + NOTICE_MESSAGE.PURCHASE_AMOUNT);
  }

  static purchasedLottoList(purchased) {
    purchased.lottoArray.forEach((lotto) => {
      const lottoNumbers = lotto.showNumbers().join(", ");
      Console.print(`[${lottoNumbers}]`);
    });
  }

  static purchasedLottoStatus(purchased) {
    Print.purchasedLottoAmount(purchased);
    Print.purchasedLottoList(purchased);
  }

  static totalStats(totalStats) {
    const { data, performance } = totalStats;
    const statsBoard = Create.statsBoard(data, performance);
    Console.print(statsBoard);
  }
}

module.exports = Print;

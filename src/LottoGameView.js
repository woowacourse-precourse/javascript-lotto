const { Console } = require("@woowacourse/mission-utils");

class LottoGameView {
  requestInput(question, callback) {
    Console.readLine(question, callback);
  }

  printLottoQuantity(quantity) {
    Console.print(`${quantity}개를 구매했습니다.`);
  }

  printEachLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers().join(", ");

      Console.print(`[${lottoNumbers}]`);
    });
  }

  printPrizeStatistics(prizeStatisticsTemplates) {
    prizeStatisticsTemplates.forEach((template) => {
      Console.print(template);
    });
  }

  printYieldRatio(yieldRatio) {
    Console.print(`총 수익률은 ${yieldRatio}%입니다.`);
  }
}

module.exports = LottoGameView;

const MissionUtils = require("@woowacourse/mission-utils");

class LottoUI {
  inputRequest(message, callbackFunction) {
    MissionUtils.Console.readLine(message, callbackFunction);
  }
  printLottoCount(lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
  }
  prinntLottoNumber(lotto) {
    lotto.forEach((lottoNumbers) => {
      const lottoList = lottoNumbers.getLottoNumber().join(", ");
      MissionUtils.Console.print(`[${lottoList}]`);
    });
  }
  printRankingTotal(result) {
    Object.entries(result).forEach(([ranking, count]) =>
      MissionUtils.Console.print(result[ranking])
    );
  }
  printEarningRatio(earningRatio) {
    MissionUtils.Console.print(`총 수익률은 ${earningRatio}%입니다.`);
  }
}

module.exports = LottoUI;

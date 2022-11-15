const MissionUtils = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./Constants");
class LottoUI {
  inputRequest(message, callbackFunction) {
    MissionUtils.Console.readLine(message, callbackFunction);
  }
  printLottoCount(lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
  }
  prinntLottoNumber(lotto) {
    lotto.forEach((lottoNumbers) => {
      const lottoList = lottoNumbers.join(", ");
      MissionUtils.Console.print(`[${lottoList}]`);
    });
  }
  printRankingTotal(result) {
    MissionUtils.Console.print(GUIDE_MESSAGE.RESULT_GUIDE);
    MissionUtils.Console.print(GUIDE_MESSAGE.RESULT_LINE);
    Object.entries(result).forEach(([ranking, count]) =>
      MissionUtils.Console.print(result[ranking])
    );
  }
  printEarningRatio(earningRatio) {
    MissionUtils.Console.print(`총 수익률은 ${earningRatio}%입니다.`);
    MissionUtils.Console.print(GUIDE_MESSAGE.RESULT_LINE);
    MissionUtils.Console.close();
  }
}

module.exports = LottoUI;

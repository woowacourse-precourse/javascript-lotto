const MissionUtils = require("@woowacourse/mission-utils");

class Margin {
  haveMargin(nTenWon, PROFIT) {
    const margin = ((PROFIT / nTenWon) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${margin}%입니다.`);
    //종료
    MissionUtils.Console.close();
    return margin;
  }
}

module.exports = Margin;

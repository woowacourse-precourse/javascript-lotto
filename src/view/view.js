const MissionUtils = require("@woowacourse/mission-utils");
const { GRADE, RESULT } = require("../utils/constants");

class MessageViewer {
  numberOfGamesMessage(numberOfGames) {
    MissionUtils.Console.print(`\n${numberOfGames}개를 구매했습니다.`);
  }

  issuedLottoNumberMessage(lottoNumber) {
    MissionUtils.Console.print("[" + lottoNumber.join(", ") + "]");
  }

  resultMessage(resultArray, earningsRate) {
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_MESSAGE);
    MissionUtils.Console.print(RESULT.BORDER_LINE);
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_5TH + " - " + resultArray[GRADE.FIFTH_GRADE - 1] + "개");
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_4TH + " - " + resultArray[GRADE.FOURTH_GRADE - 1] + "개");
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_3RD + " - " + resultArray[GRADE.THIRD_GRADE - 1] + "개");
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_2ND + " - " + resultArray[GRADE.SECOND_GRADE - 1] + "개");
    MissionUtils.Console.print(RESULT.RESULT_STATISTICS_1ST + " - " + resultArray[GRADE.FIRST_GRADE - 1] + "개");
    MissionUtils.Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }
}

module.exports = MessageViewer;

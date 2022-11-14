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
    MissionUtils.Console.print(RESULT.TITLE);
    MissionUtils.Console.print(RESULT.BORDER_LINE);
    MissionUtils.Console.print(RESULT.FIFTH + " - " + resultArray[GRADE.FIFTH - 1] + "개");
    MissionUtils.Console.print(RESULT.FOURTH + " - " + resultArray[GRADE.FOURTH - 1] + "개");
    MissionUtils.Console.print(RESULT.THIRD + " - " + resultArray[GRADE.THIRD - 1] + "개");
    MissionUtils.Console.print(RESULT.SECOND + " - " + resultArray[GRADE.SECOND - 1] + "개");
    MissionUtils.Console.print(RESULT.FIRST + " - " + resultArray[GRADE.FIRST - 1] + "개");
    //정규표현식 출처: https://codechacha.com/ko/javascript-number-format-comma/
    MissionUtils.Console.print("총 수익률은 " + earningsRate.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%입니다.");
  }
}

module.exports = MessageViewer;

const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static ASK_BUY_LOTTO_AMOUNT = "구입금액을 입력해 주세요.\n";
  static NUMBER_OF_LOTTO_PURCHASED = "개를 구매했습니다.";
  static ASK_WIN_NUMBER = "당첨 번호를 입력해주세요.\n";
  static ASK_BONUS_NUMBER = "보너스 번호를 입력해 주세요.\n";
  static WINNING_STATUS = "당첨 통계\n---";

  static askUserInput(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  static printMessage(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }
}
module.exports = Console;

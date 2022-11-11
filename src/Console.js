const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static ASK_BUY_LOTTO_AMOUNT = "구입금액을 입력해 주세요.\n";
  static NUMBER_OF_LOTTO_PURCHASED = "개를 구매했습니다.";

  static askUserInput(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  static printMessage(message) {
    MissionUtils.Console.print(message);
  }
}
module.exports = Console;

const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static REQUEST_LOTTO_PRICE = "구입금액을 입력해 주세요.\n";
  static PURCHASED_LOTTO_COUNT_MSG = "개를 구매했습니다.\n";
  static REQUEST_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.\n";
  static REQUEST_BONUT_NUMBER = "보너스 번호를 입력해 주세요.";
  static REQUEST_BONUT_NUMBER = "당첨 통계\n---";

  static getUserInput(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }
}

module.exports = Console;

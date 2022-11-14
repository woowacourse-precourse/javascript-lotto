const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static ASK_PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";
  static LOTTO_COUNT = "개를 구매했습니다.";
  static ASK_WINNING_NUMBER = "당첨 번호를 입력해 주세요.\n";
  static ASK_BONUS_NUMBER = "보너스 번호를 입력해 주세요.\n";
  static STATISTICS = "당첨 통계\n---";

  static askAndGetUserInput(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }

  static printLotto(lottos) {
    lottos.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
  }
}

module.exports = Console;

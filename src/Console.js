const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static ASK_PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";
  static PURCHASE_AMOUNT_MESSAGE = "개를 구매했습니다.";

  static askAndGetUserInput(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static calculateLottoCountWithPurchaseAmount(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  // static printPurchaseAmount(purchaseAmount) {
  //   MissionUtils.Console.print(`${purchaseAmount}${Console.PURCHASE_AMOUNT_MESSAGE}`);
  // }
}

module.exports = Console;

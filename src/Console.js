const { Console } = require("@woowacourse/mission-utils");

class Console {
  static PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";

  static askAndGetUserInput(question, callback) {
    Console.readLine(question, callback);
  }

  // static checkPurchaseAmount(purchaseAmount) {}
}

module.exports = Console;

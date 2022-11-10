const { Console } = require("@woowacourse/mission-utils");

class Console {
  static PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";

  static getPurchaseAmount(callback) {
    Console.readLine(this.PURCHASE_AMOUNT_MESSAGE, callback);
  }

  // static checkPurchaseAmount(purchaseAmount) {}
}

module.exports = Console;

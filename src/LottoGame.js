const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");

class LottoGame {
  play() {
    Console.readLine(REQUEST_MESSAGE.PURCHASE_MONEY, (purchaseMoney) => {});
  }
}

module.exports = LottoGame;

const { Console } = require("@woowacourse/mission-utils");
const ValidCheckUtils = require("./utils/ValidCheckUtils");

class LottoGame {
  pay;
  lottos;
  winningNum;
  BonusNum;

  constructor() {}

  start() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkPay(input);
      this.pay = input;
    });
  }
}

module.exports = LottoGame;

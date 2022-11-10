const { Console } = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
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
      this.purchaseLotto(Number(this.pay) / 1000);
    });
  }

  purchaseLotto(count) {
    this.lottos = GameUtils.getLottos(count);
    this.printLottos();
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      Console.print();
    });
  }
}

module.exports = LottoGame;

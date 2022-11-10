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
    Console.print(`${count}개를 구매했습니다.`);

    this.lottos = GameUtils.getLottos(count);
    this.printLottos();
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      lotto.printNumbers();
    });

    this.setWinnigNumber();
  }

  setWinnigNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkWinningNumber(input);
      this.winningNum = GameUtils.getWinnigNumbers(input);

      this.setBonusNumber();
    });
  }
}

module.exports = LottoGame;

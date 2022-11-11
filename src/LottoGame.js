const { Console } = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
const ValidCheckUtils = require("./utils/ValidCheckUtils");
const Constant = require("./utils/Constant");

class LottoGame {
  pay;
  lottos;
  winningNum;
  bonusNum;
  lottoRanks;

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

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkBonusNumber(input, this.winningNum);
      this.bonusNum = input;

      this.setLottoRanks();
    });
  }

  setLottoRanks() {
    this.lottoRanks = GameUtils.getTotalRankArray(
      this.lottos,
      this.winningNum,
      this.bonusNum
    );

    this.printResult();
  }

  printResult() {
    this.lottoRanks.forEach((r, i) => {
      Console.print(`${Constant.RESULT_STRING[i]}${r}개`);
    });
    Console.print(
      `총 수익률은 ${GameUtils.getYield(this.lottoRanks, this.pay)}%입니다.`
    );
    Console.close();
  }
}

module.exports = LottoGame;

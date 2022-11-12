const { Console } = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
const ValidCheckUtils = require("./utils/ValidCheckUtils");
const Result = require("./message/Result");

class LottoGame {
  pay;
  lottos;
  winningNum;
  bonusNum;
  lottoRanks;

  constructor() {}

  start() {
    GameUtils.getUserInput(
      "구입금액을 입력해 주세요.\n",
      ValidCheckUtils.checkPay
    ).then((input) => {
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
    GameUtils.getUserInput(
      "당첨 번호를 입력해 주세요.\n",
      ValidCheckUtils.checkWinningNumber
    ).then((input) => {
      this.winningNum = GameUtils.getWinnigNumbers(input);
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    GameUtils.getUserInput(
      "보너스 번호를 입력해 주세요.\n",
      ValidCheckUtils.checkBonusNumber,
      this.winningNum
    ).then((input) => {
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
      Console.print(`${Result.RESULT_STRING[i]}${r}개`);
    });
    Console.print(
      `총 수익률은 ${GameUtils.getYield(this.lottoRanks, this.pay)}%입니다.`
    );
    Console.close();
  }
}

module.exports = LottoGame;

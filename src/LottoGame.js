const { Console } = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
const ValidCheckUtils = require("./utils/ValidCheckUtils");
const Result = require("./message/Result");

class LottoGame {
  pay;
  purchasedLottos;
  winningNumber;
  bonusNumber;
  lottoRanks;

  constructor() {}

  start() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkPay(input);

      this.pay = input;

      this.purchaseLottos(Number(this.pay) / 1000);
    });
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);

    this.purchasedLottos = GameUtils.getLottos(count);

    this.printNumbersOfPurchasedLottos();
  }

  printNumbersOfPurchasedLottos() {
    this.purchasedLottos.forEach((lotto) => {
      lotto.printNumbers();
    });

    this.setWinnigNumber();
  }

  setWinnigNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkWinningNumber(input);

      this.winningNumber = GameUtils.getWinnigNumbersArray(input);

      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (input) => {
      ValidCheckUtils.checkBonusNumber(input, this.winningNumber);

      this.bonusNumber = input;

      this.setLottoRanks();
    });
  }

  setLottoRanks() {
    this.lottoRanks = GameUtils.getTotalRankArray(
      this.purchasedLottos,
      this.winningNumber,
      this.bonusNumber
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

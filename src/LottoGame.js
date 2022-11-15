const { Console } = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
const ValidCheckUtils = require("./utils/ValidCheckUtils");
const { ResultMsg, GuideMsg, ConstNumber } = require("./Constant");

class LottoGame {
  pay;
  purchasedLottos;
  winningNumber;
  bonusNumber;
  lottoRanks;

  constructor() {}

  start() {
    Console.readLine(GuideMsg.INPUT_PAY, (input) => {
      ValidCheckUtils.checkPay(input);

      this.pay = input;

      this.purchaseLottos(Number(this.pay) / ConstNumber.PAY_UNIT);
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
    Console.readLine(GuideMsg.INPUT_WINNING, (input) => {
      ValidCheckUtils.checkWinningNumber(input);

      this.winningNumber = GameUtils.getWinnigNumbersArray(input);

      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine(GuideMsg.INPUT_BONUS, (input) => {
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
      Console.print(`${ResultMsg[i]}${r}개`);
    });

    Console.print(
      `총 수익률은 ${GameUtils.getYield(this.lottoRanks, this.pay)}%입니다.`
    );

    Console.close();
  }
}

module.exports = LottoGame;

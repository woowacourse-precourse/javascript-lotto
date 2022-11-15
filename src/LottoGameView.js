const LottoGame = require("./LottoGame");
const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const { PRIZE_CRITERIA } = require("./GameConstants");

class LottoGameView {
  constructor() {
    this.game = new LottoGame(this);
  }
  
  gameStart() {
    this.receivePurchaseAmount();
  }

  receivePurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.PURCHASE_AMOUNT, (amount) => {
      this.game.setPurchaseAmount(Number(amount));
      this.game.issueLottories();
    });
  }

  printPurchasedLotteries(lottoQuantity, lotteries) {
    Console.print(`\n${lottoQuantity}${MESSAGE.OUTPUT.PURCHASE_COUNT}`);
    lotteries.forEach((lotto) => {
      const number = lotto.getNumber();
      const printNumber = number.map((num) => num).join(', ');
      Console.print(`[${printNumber}]`);
    });

    this.receiveWinningNumber();
  }

  receiveWinningNumber() {
    Console.readLine(MESSAGE.INPUT.WINNING_NUMBER, (number) => {
      this.game.setWinningLotto(number);
      this.receiveBonusNumber();
    });
  }

  receiveBonusNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_NUMBER, (bonus) => {
      this.game.setBonusNumber(bonus);
      this.game.compareWinningLotto();
    });
  }

  printWinningStatistics(prizeCount) {
    Console.print(MESSAGE.OUTPUT.WINNING_STATISTICS);
    Console.print(`${PRIZE_CRITERIA.FIFTH}개 일치 (${MESSAGE.PRIZE_MONEY.FIFTH}원) - ${prizeCount.fifth}개`);
    Console.print(`${PRIZE_CRITERIA.FOURTH}개 일치 (${MESSAGE.PRIZE_MONEY.FOURTH}원) - ${prizeCount.fourth}개`);
    Console.print(`${PRIZE_CRITERIA.SECOND_THIRD}개 일치 (${MESSAGE.PRIZE_MONEY.THIRD}원) - ${prizeCount.third}개`);
    Console.print(`${PRIZE_CRITERIA.SECOND_THIRD}개 일치, 보너스 볼 일치 (${MESSAGE.PRIZE_MONEY.SECOND}원) - ${prizeCount.second}개`);
    Console.print(`${PRIZE_CRITERIA.FIRST}개 일치 (${MESSAGE.PRIZE_MONEY.FIRST}원) - ${prizeCount.first}개`);
    this.game.setTotalYield();
  }

  printYield(totalYield) {
    Console.print(`총 수익률은 ${totalYield}%입니다.`);
    this.gameFinish();
  }

  gameFinish() {
    Console.close();
  }
}

module.exports = LottoGameView;

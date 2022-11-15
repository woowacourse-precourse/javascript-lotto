const LottoGame = require("./LottoGame");
const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const { PRIZE_CRITERIA, PRIZE_MONEY_PRICE } = require("./GameConstants");

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
    const quantitNotificationMessage = `\n${lottoQuantity}${MESSAGE.OUTPUT.PURCHASE_COUNT}`;
    Console.print(quantitNotificationMessage);
    lotteries.forEach((lotto) => {
      const number = lotto.getNumber().map((num) => num).join(', ');
      const numberMessage = `[${number}]`;
      Console.print(numberMessage);
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
    const prizes = [...Object.keys(PRIZE_CRITERIA)].reverse();
    prizes.forEach((prize) => {
      if (prize === 'SECOND_THIRD') {
        this.printEachWinning(PRIZE_CRITERIA.SECOND_THIRD, MESSAGE.PRIZE_MONEY.THIRD, prizeCount.third);
        this.printEachWinning(PRIZE_CRITERIA.SECOND_THIRD, MESSAGE.PRIZE_MONEY.SECOND, prizeCount.second);
      } else {
        this.printEachWinning(PRIZE_CRITERIA[prize], MESSAGE.PRIZE_MONEY[prize], prizeCount[prize.toLowerCase()]);
      }
    });

    this.game.setTotalYield();
  }

  printEachWinning(criteria, price, count) {
    if (Number(price.replace(/,/g, '')) === PRIZE_MONEY_PRICE.SECOND) {
      const secondPrizeMessage = `${criteria}개 일치, 보너스 볼 일치 (${price}원) - ${count}개`;
      Console.print(secondPrizeMessage);
      return;
    }
    const eachPrizeMessage = `${criteria}개 일치 (${price}원) - ${count}개`;
    Console.print(eachPrizeMessage);
  }

  printYield(totalYield) {
    const totalYieldMessage = `총 수익률은 ${totalYield}%입니다.`;
    Console.print(totalYieldMessage);
    this.gameFinish();
  }

  gameFinish() {
    Console.close();
  }
}

module.exports = LottoGameView;

const { Console } = require('@woowacourse/mission-utils');
const LottoGame = require('./LottoGame');
const MESSAGES = require('./Messages');
const {
  PRIZE_CRITERIA,
  PRIZE_MONEY_PRICE,
} = require('./GameConstants');

class LottoGameView {
  constructor() {
    this.game = new LottoGame(this);
  }

  gameStart() {
    this.receivePurchaseAmount();
  }

  receivePurchaseAmount() {
    Console.readLine(MESSAGES.INPUT.PURCHASE_AMOUNT, (amount) => {
      this.game.setPurchaseAmount(Number(amount));
      this.game.issueLottos();
    });
  }

  printPurchasedLottos(lottoQuantity, lottos) {
    const quantitNotificationMessage = `\n${lottoQuantity}${MESSAGES.OUTPUT.PURCHASE_COUNT}`;
    Console.print(quantitNotificationMessage);
    lottos.forEach((lotto) => {
      const number = lotto.getNumber().map((num) => num).join(', ');
      const numberMessage = `[${number}]`;
      Console.print(numberMessage);
    });

    this.receiveWinningNumber();
  }

  receiveWinningNumber() {
    Console.readLine(MESSAGES.INPUT.WINNING_NUMBER, (number) => {
      this.game.setWinningLotto(number);
      this.receiveBonusNumber();
    });
  }

  receiveBonusNumber() {
    Console.readLine(MESSAGES.INPUT.BONUS_NUMBER, (bonus) => {
      this.game.setBonusNumber(bonus);
      this.game.compareWinningLotto();
    });
  }

  printWinningStatistics(prizeCount) {
    Console.print(MESSAGES.OUTPUT.WINNING_STATISTICS);
    const prizes = [...Object.keys(PRIZE_CRITERIA)].reverse();
    prizes.forEach((prize) => {
      if (prize === 'SECOND_THIRD') {
        this.printThirdWinning(prizeCount);
        this.printSecondWinning(prizeCount);
      } else {
        const criteria = PRIZE_CRITERIA[prize];
        const price = MESSAGES.PRIZE_MONEY[prize];
        const count = prizeCount[prize.toLowerCase()];
        this.printEachWinning(criteria, price, count);
      }
    });

    this.game.setTotalYield();
  }

  printThirdWinning(prizeCount) {
    const criteria = PRIZE_CRITERIA.SECOND_THIRD;
    const price = MESSAGES.PRIZE_MONEY.THIRD;
    const count = prizeCount.third;
    this.printEachWinning(criteria, price, count);
  }

  printSecondWinning(prizeCount) {
    const criteria = PRIZE_CRITERIA.SECOND_THIRD;
    const price = MESSAGES.PRIZE_MONEY.SECOND;
    const count = prizeCount.second;
    this.printEachWinning(criteria, price, count);
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

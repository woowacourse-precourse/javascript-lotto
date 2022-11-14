const { Console } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');
const WinningNumber = require('./WinningNumber');
const WinningRank = require('./WinningRank');
const {
  PURCHASE_MESSAGE,
  DEFAULT_PRICE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  WINNING_STATISTICS_MESSAGE,
  LINE,
  WINNING_STATISTICS,
} = require('./Constants');

class App {
  play() {
    Console.readLine(PURCHASE_MESSAGE, (purchaseMoney) => {
      this.purchaseMoney = Number(purchaseMoney);
      this.purchaseCount = this.purchaseMoney / DEFAULT_PRICE;

      const purchaseLotto = new PurchaseLotto(this.purchaseCount);
      this.purchaseLotto = purchaseLotto;

      this.purchaseLotto.printPurchaseCountMessage(this.purchaseCount);
      this.getPurchaseLottoNumber();
    });
  }

  getPurchaseLottoNumber() {
    this.purchaseLotto.getLottoNumbers(this.purchaseCount);
    this.purchaseLotto.printLottoNumber();
    this.getWinningNumber();
  }

  getWinningNumber() {
    const winningNumber = new WinningNumber();
    this.winningNumber = winningNumber;

    Console.readLine(WINNING_NUMBER_MESSAGE, (winningNumber) => {
      this.winningList = this.winningNumber.setWinningNumber(winningNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(BONUS_NUMBER_MESSAGE, (bonusNumber) => {
      this.bonusNumber = this.winningNumber.setBonusNumber(bonusNumber);
      this.printStatisticsMessage();
    });
  }

  printStatisticsMessage() {
    Console.print(WINNING_STATISTICS_MESSAGE);
    Console.print(LINE);
    this.printStatistics();
  }

  getMatchCount() {
    const winningRank = new WinningRank();
    this.winningRank = winningRank;

    const lottoTickets = this.purchaseLotto.getLottoTickets();

    this.winningRank.getMatchLotto(
      lottoTickets,
      this.winningList,
      this.bonusNumber
    );

    return this.winningRank.getCountRank();
  }

  printStatistics() {
    const rank = this.getMatchCount();

    Console.print(WINNING_STATISTICS.PLACE_5TH(rank[4]));
    Console.print(WINNING_STATISTICS.PLACE_4TH(rank[3]));
    Console.print(WINNING_STATISTICS.PLACE_3RD(rank[2]));
    Console.print(WINNING_STATISTICS.PLACE_2ND(rank[1]));
    Console.print(WINNING_STATISTICS.PLACE_1ST(rank[0]));
  }
}

const app = new App();
app.play();
module.exports = App;

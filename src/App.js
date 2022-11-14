const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const PurchaseLotto = require('./PurchaseLotto');
const WinningNumber = require('./WinningNumber');
const WinningRank = require('./WinningRank');
const Validate = require('./Validate');
const {
  PURCHASE_MESSAGE,
  DEFAULT_PRICE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  WINNING_STATISTICS_MESSAGE,
  LINE,
  WINNING_STATISTICS,
  EARNINGS,
  WINNING_PRIZE,
} = require('./Constants');

class App {
  play() {
    Console.readLine(PURCHASE_MESSAGE, (purchaseMoney) => {
      this.purchaseMoney = Number(purchaseMoney);
      this.purchaseCount = this.purchaseMoney / DEFAULT_PRICE;

      const validate = new Validate();
      validate.validateMoney(this.purchaseMoney);

      this.printPurchaseMessage();
    });
  }

  printPurchaseMessage() {
    const purchaseLotto = new PurchaseLotto(this.purchaseCount);
    this.purchaseLotto = purchaseLotto;

    this.purchaseLotto.printPurchaseCountMessage(this.purchaseCount);
    this.getPurchaseLottoNumber();
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
      this.lotto = new Lotto(this.winningList);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(BONUS_NUMBER_MESSAGE, (bonusNumber) => {
      this.bonusNumber = this.winningNumber.setBonusNumber(bonusNumber);
      const validate = new Validate();
      validate.validateBonusNumber(this.bonusNumber);
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

    this.printEarnings();
  }

  calEarnings() {
    const rank = this.getMatchCount();

    const totalWinning =
      rank[4] * WINNING_PRIZE.PLACE_5TH +
      rank[3] * WINNING_PRIZE.PLACE_4TH +
      rank[2] * WINNING_PRIZE.PLACE_3RD +
      rank[1] * WINNING_PRIZE.PLACE_2ND +
      rank[0] * WINNING_PRIZE.PLACE_1ST;

    const totalPurchaseCount = this.purchaseMoney;
    const earnings = ((totalWinning / totalPurchaseCount) * 100).toFixed(2);
    return earnings;
  }

  printEarnings() {
    Console.print(EARNINGS.YIELD_MESSAGE(this.calEarnings()));
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;

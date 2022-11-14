const { Console } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');
const WinningNumber = require('./WinningNumber');
const {
  PURCHASE_MESSAGE,
  DEFAULT_PRICE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
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
    });
  }
}

const app = new App();
app.play();
module.exports = App;

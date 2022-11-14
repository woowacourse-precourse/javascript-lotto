const { Console } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');
const { PURCHASE_MESSAGE, DEFAULT_PRICE } = require('./Constants');
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
  }
}

const app = new App();
app.play();
module.exports = App;

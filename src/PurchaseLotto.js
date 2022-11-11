const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { lottoNumber } = require('./LottoNumber');
const {
  PURCHASE_MESSAGE,
  PURCHASE_COUNT_MESSAGE,
  DEFAULT_PRICE,
} = require('./Constants');

class PurchaseLotto {
  getPurchaseAmount() {
    Console.readLine(PURCHASE_MESSAGE, (purchaseMoney) => {
      this.purchaseMoney = Number(purchaseMoney);
      return this.printPurchaseLotto();
    });
  }

  printPurchaseCountMessage() {
    this.purchaseCount = this.purchaseMoney / DEFAULT_PRICE;
    Console.print(PURCHASE_COUNT_MESSAGE(this.purchaseCount));
  }

  printLottoNumber() {
    for (let i = 0; i < this.purchaseCount; i++) {
      Console.print(lottoNumber.createLottoNumber());
    }
  }

  printPurchaseLotto() {
    this.printPurchaseCountMessage();
    this.printLottoNumber();
  }
}

const purchaseLotto = new PurchaseLotto();
exports.purchaseLotto = purchaseLotto;

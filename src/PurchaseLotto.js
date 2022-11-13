const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { lottoNumber } = require('./LottoNumber');
const {
  PURCHASE_MESSAGE,
  PURCHASE_COUNT_MESSAGE,
  DEFAULT_PRICE,
} = require('./Constants');

class PurchaseLotto {
  constructor() {
    this.lottoNumbers = [];
  }

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

  getLottoNumbers() {
    for (let i = 0; i < this.purchaseCount; i++) {
      const num = lottoNumber.createLottoNumber();
      this.lottoNumbers.push(num);
    }
    return this.lottoNumbers;
  }

  printLottoNumber() {
    return [...this.getLottoNumbers()].forEach((num) => Console.print(num));
  }

  printPurchaseLotto() {
    this.printPurchaseCountMessage();
    this.printLottoNumber();
  }
}

const purchaseLotto = new PurchaseLotto();
exports.purchaseLotto = purchaseLotto;

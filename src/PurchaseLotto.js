const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { lottoNumber } = require('./LottoNumber');
const { PURCHASE_COUNT_MESSAGE } = require('./Constants');

class PurchaseLotto {
  constructor(purchaseCount) {
    this.lottoNumbers = [];
    this.purchaseCount = purchaseCount;
  }

  printPurchaseCountMessage(purchaseCount) {
    Console.print(PURCHASE_COUNT_MESSAGE(purchaseCount));
  }

  getLottoNumbers(purchaseCount) {
    for (let i = 0; i < purchaseCount; i++) {
      const num = lottoNumber.createLottoNumber();
      this.lottoNumbers.push(num);
    }
  }

  getLottoTickets() {
    return [...this.lottoNumbers];
  }

  printLottoNumber() {
    return this.getLottoTickets().forEach((num) =>
      Console.print(`[${num.join(', ')}]`)
    );
  }
}

module.exports = PurchaseLotto;

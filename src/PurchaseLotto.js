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
      const newLottoNumber = lottoNumber.createLottoNumber();
      this.lottoNumbers.push(newLottoNumber);
    }
  }

  getLottoTickets() {
    return [...this.lottoNumbers];
  }

  printLottoNumber() {
    return this.getLottoTickets().forEach((lottoNumber) =>
      Console.print(`[${lottoNumber.join(', ')}]`)
    );
  }
}

module.exports = PurchaseLotto;

const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  constructor() {
    this.purchaseLottoAmount = 0;
  }

  printPurchaseMessage() {
    Console.print('구입금액을 입력해 주세요.');
    return this;
  }

  printPurchaseOutputMessage() {
    Console.print('');
    Console.print(`${this.purchaseLottoAmount}개를 구매했습니다.`);
    return this.printPurchaseLottoList();
  }

  printPurchaseLottoList() {}

  submitPurchaseAmount() {
    Console.readLine('', input => {
      let purchase = new Purchase(input);
      this.purchaseLottoAmount = purchase.validateCashInput().LottoCount;
      return this.printPurchaseOutputMessage;
    });
  }

  play() {
    this.printPurchaseMessage().submitPurchaseAmount();
  }
}

module.exports = App;

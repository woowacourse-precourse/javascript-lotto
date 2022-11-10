const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  constructor() {
    this.cash = 0;
    this.purchaseLottoAmount = 0;
    this.purchaseLottoList = [];
  }

  printPurchaseInputMessage() {
    Console.print('구입금액을 입력해 주세요.');
    return this;
  }

  printPurchaseOutputMessage() {
    Console.print('');
    Console.print(`${this.purchaseLottoAmount}개를 구매했습니다.`);
    return this.printPurchaseLottoList();
  }

  printPurchaseLottoList() {
    this.purchaseLottoList.forEach(lotto => Console.print(lotto));
  }

  submitPurchaseAmount() {
    Console.readLine('', input => {
      let purchase = new Purchase(input);
      this.cash = purchase.Cash;
      this.purchaseLottoAmount = purchase.LottoCount;
      this.purchaseLottoList = purchase.LottoList;
      return this.printPurchaseOutputMessage();
    });
  }

  play() {
    this.printPurchaseInputMessage().submitPurchaseAmount();
  }
}

module.exports = App;

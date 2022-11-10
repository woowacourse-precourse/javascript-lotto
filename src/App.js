const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  printPurchaseMessage() {
    Console.print('구입금액을 입력해 주세요.');
    return this;
  }

  play() {
    this.printPurchaseMessage();
  }
}

module.exports = App;

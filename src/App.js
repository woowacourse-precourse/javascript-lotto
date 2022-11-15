const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    let PurchaseAmount = 0;
  }

  play() {
    this.PurchaseLotto();
  }

  PurchaseLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.PurchaseAmount = amount;
      this.ValidatePurchaseAmount();
      Console.print(`${this.PurchaseAmount / 1000}개를 구매했습니다.`);
    });
  }

  ValidatePurchaseAmount() {
    if (this.PurchaseAmount % 1000 !== 0) {
      throw '[ERROR] 로또 구입 금액이 1000원 단위가 아닙니다.';
    }
  }
}

module.exports = App;

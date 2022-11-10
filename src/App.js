const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    let purchaseAmount = 0;
  }

  play() {
    this.buyLotto();
  }
  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.purchaseAmount = amount;
      this.validatePurchaseAmount();
      Console.print(`${this.purchaseAmount / 1000}개를 구매했습니다.`)
    })
  }

  validatePurchaseAmount() {
    if (this.purchaseAmount % 1000 !== 0) {
      throw "[ERROR] 로또 구입 금액을 1,000원 단위로 입력 하세요."
    }
  }
}

module.exports = App;

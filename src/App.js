const { Console, Random } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');

class App {
  #purchaseLotto;

  constructor() {
    this.#purchaseLotto = new PurchaseLotto();
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.#purchaseLotto.setPurchaseAmount(amount);

      Console.print(`${this.#purchaseLotto.getPurchaseNum()}개를 구매했습니다.`);

      this.#purchaseLotto.purchase();
    })
  }
}

module.exports = App;

const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    let purchaseNum = 0;
    let purchasedLotto = [];
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.validatePurchaseAmount(amount);
      this.purchaseNum = amount / 1000;
      Console.print(`${this.purchaseNum}개를 구매했습니다.`)

      this.purchaseLotto();
    })
  }

  validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw "[ERROR] 로또 구입 금액을 1,000원 단위로 입력 하세요."
    }
  }

  purchaseLotto() {
    let purchasedLotto = [];
    for (let i = 0; i < this.purchaseNum; i++) {
      let lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => { a - b });

      let lotto = new Lotto(lottoNums);

      purchasedLotto.push(lotto);
    }
    this.purchaseLotto = purchasedLotto;
    this.purchaseLotto.map((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
}

module.exports = App;

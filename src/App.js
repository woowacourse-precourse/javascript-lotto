const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    let purchaseNum = 0;
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.validatePurchaseAmount(amount);
      this.purchaseNum = amount / 1000;
      Console.print(`${this.purchaseNum}개를 구매했습니다.`)

      this.pickLottoNumber();
    })
  }

  validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw "[ERROR] 로또 구입 금액을 1,000원 단위로 입력 하세요."
    }
  }

  pickLottoNumber() {
    for (let i = 0; i < this.purchaseNum; i++) {
      let lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);

      lottoNums = lottoNums.sort(function (a, b) { return a - b });

      let buyLotto = new Lotto(lottoNums);
      Console.print(buyLotto.getNumbers());
    }
  }
}

module.exports = App;

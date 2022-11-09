const { Random, Console } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

class App {
  play() {}

  purchase() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.money = money;
      this.purchaseException(this.money);
    });
  }

  purchaseException(money) {
    if (money % 1000 !== 0)
      throw new Error('[EEROR] 금액은 천원 단위로 입력해주세요.');
  }
}

const app = new App();
app.purchase();
module.exports = App;

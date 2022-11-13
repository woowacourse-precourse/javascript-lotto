const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    const money = this.receiveMoney();
  }

  receiveMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.checkMoneyValidity(money);
    });
  }

  checkMoneyValidity(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }
}

module.exports = App;

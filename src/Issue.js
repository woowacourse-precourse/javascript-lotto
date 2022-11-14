const { Console } = require('@woowacourse/mission-utils')
const Validation = require('./Validation');

class Issue {
  purchase() {
    Console.readLine('구입금액을 입력해 주세요.', (inputValue) => {
      new Validation().purchaseValue(inputValue);
      this.purchaseCount = Math.floor(Number(inputValue) / 1000);
      Console.close();
    });
  }
}

module.exports = Issue;
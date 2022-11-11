const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {}

  play() {
    this.requestMoneyInput();
  }

  requestMoneyInput() {
    Console.readLine('구입 금액을 입력해 주세요.\n', (input) => {
      const money = Number(input);
      this.validateMoney(money);
    });
  }

  validateMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error('[ERROR] 구입 금액은 숫자만 입력해 주세요.');
    }
    if (!Number.isInteger(money / 1000)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }
  }
}

module.exports = App;

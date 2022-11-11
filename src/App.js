const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {}

  play() {
    this.requestMoneyInput();
  }

  requestMoneyInput() {
    Console.readLine('구입 금액을 입력해 주세요.\n', (input) => {
      const money = Number(input);
    });
  }
}

module.exports = App;

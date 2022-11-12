const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');

class App {
  constructor() {}

  start() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const purchase = new Purchase(answer);
    });
  }

  play() {
    this.start();
  }
}

module.exports = App;

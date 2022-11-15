const { Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {}
  play() {}

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', input => {});
  }

  readLine(message, callback) {
    return Console.readLine(message, callback);
  }

  print(message) {
    return Console.print(message);
  }
}

// const app = new App();
// app.setPurchaseAmount();
module.exports = App;

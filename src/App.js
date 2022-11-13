const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.askForPayment();
  }

  askForPayment() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (input) => {});
  }
}

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startGame();
  }

  printStartMessage() {
    Console.print('구입금액을 입력해 주세요.');
  }

  startGame() {
    this.printStartMessage();
  }
}

module.exports = App;

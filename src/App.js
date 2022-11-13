const { Console } = require('@woowacourse/mission-utils');
const Player = require('./Player');

class App {
  constructor() {
    this.player = new Player();
  }

  play() {
    this.askForPayment();
  }

  askForPayment() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (input) => {
      const money = Number(input);
      this.player.buyLottos(money);
    });
  }
}

module.exports = App;

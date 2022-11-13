const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('./Money');

class App {
  #Money;

  constructor() {
    this.money = 0;
  }

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.', (money) => {
      this.#Money = new Money(money);
      this.money = money;
    });
  }
}

module.exports = App;

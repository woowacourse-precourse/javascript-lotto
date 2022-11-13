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
      this.checkQuantity(money);
    });
  }

  checkQuantity(money) {
    const quantity = money / 1000;
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }
}

module.exports = App;

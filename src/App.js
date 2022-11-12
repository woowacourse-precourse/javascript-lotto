const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.LOTTO_TICKET_PRICE = 1000;
    this.money = 0;
  }
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, money => {
      this.money += Number(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;

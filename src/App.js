const { Random, Console } = require("@woowacourse/mission-utils");
import { MESSAGE } from "./Constant";
class App {
  #money;

  constructor() {}

  getMoney = () => {
    Console.readLine(MESSAGE.GETMONEY, (money) => {
      // TODO: 입력된 값 유효성 체크
      this.#money = money;
      this.getNumberOfLottery();
    });
  };

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;

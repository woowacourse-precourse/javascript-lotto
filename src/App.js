const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
class App {
  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (inputMoney) => {
      this.money = inputMoney;
    });
  }
}
let app = new App();
app.play();
module.exports = App;

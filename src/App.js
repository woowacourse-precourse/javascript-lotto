const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, ERROR_MESSAGE } = require("./constant/constant");

class App {
  play() {}

  getMoney() {
    Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.validateMoney(money);
    });
  }

  validateMoney(money) {
    if (+money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_MONEY);
    }
  }
}

module.exports = App;

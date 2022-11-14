const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE } = require("./constants");

class Controller {
  startGame() {
    this.requestInput();
  }

  inputMoney() {
    Console.readLine(CONSOLE.PURCHASE_MONEY_INPUT + "\n", (input) => {});
  }
}

module.exports = Controller;

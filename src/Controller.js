const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE } = require("./constants");
const ValidationCheck = require("./util/ValidationCheck");

class Controller {
  startGame() {
    this.requestInput();
  }

  inputMoney() {
    Console.readLine(CONSOLE.PURCHASE_MONEY_INPUT + "\n", (input) => {
      ValidationCheck.purchaseMoney(input);
    });
  }
}

module.exports = Controller;

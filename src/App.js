const { Console } = require("@woowacourse/mission-utils");
const { CONSOLE } = require("./constants");
const ValidationCheck = require("./util/ValidationCheck");

class App {
  #money;

  play() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine(CONSOLE.PURCHASE_MONEY_INPUT + "\n", (input) => {
      ValidationCheck.purchaseMoney(input);
      this.#money = Number(input);
    });
  }
}

module.exports = App;

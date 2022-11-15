const { PURCHASE } = require("./constants");

const { constants } = class LottoGame {
  start() {
    Console.readLine(PURCHASE.INPUT_PRICE, (input) => this.purchase(input));
  }
  purchase(input) {}
  drawNumer() {}
  setWinningNumber() {}
  setBonusNumber() {}
  printResult() {}
  calculateProfit() {}

  print(message) {
    return Console.print(message);
  }
};

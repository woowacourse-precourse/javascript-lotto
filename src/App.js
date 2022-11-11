const Exception = require("./Exception");
const { MESSAGES } = require("./Constants");

class App {
  constructor() {
    this.exception = new Exception();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (amount) => {
      this.exception.checkAmountExceptions(amount);
    });
  }

  play() {}
}

module.exports = App;

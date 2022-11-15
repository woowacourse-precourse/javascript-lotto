const AmountNumber = require("./numbers/AmountNumber");
class App {
  constructor() {
    this.amountNumber = new AmountNumber();
  }
  play() {
    this.amountNumber.amount();
  }
}

module.exports = App;

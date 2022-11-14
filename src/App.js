const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.lottomachine = new LottoMachine();
  }

  play() {
    this.lottomachine.inputPurchaseMoney();
  }
}

module.exports = App;

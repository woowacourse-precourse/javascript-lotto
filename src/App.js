const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.LottoMachine = new LottoMachine();
  }

  play() {
    this.LottoMachine.insertMoney();
  }
}

module.exports = App;

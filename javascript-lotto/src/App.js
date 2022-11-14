const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }
  play() {
    this.lottoMachine.insertMoney();
  }
}

module.exports = App;

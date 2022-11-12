const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.LottoMachine = new LottoMachine();
  }

  play() {
    this.LottoMachine.getPayment();
  }
}

const app = new App();
app.play();

module.exports = App;

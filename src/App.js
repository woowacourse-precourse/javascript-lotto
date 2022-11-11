const LottoProgram = require("./LottoProgram");

class App {
  constructor() {
    this.lottoProgram = new LottoProgram();
  }

  play() {
    this.lottoProgram.start();
  }
}

module.exports = App;

const app = new App();
app.play();
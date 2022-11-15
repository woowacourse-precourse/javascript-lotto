const LottoProgram = require('./LottoProgram');

class App {
  lottoProgram = new LottoProgram();

  play() {
    this.lottoProgram.start();
  }
}

module.exports = App;

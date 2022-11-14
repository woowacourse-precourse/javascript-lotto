const LottoProgram = require('./LottoProgram');

class App {
  lottoProgram = new LottoProgram();

  play() {
    this.lottoProgram.start();
  }
}

const app = new App();
app.play();

module.exports = App;

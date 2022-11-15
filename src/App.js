const LottoMachine = require('./LottoMachine');

class App {
  play() {
    const start = new LottoMachine();
    start.startGame();
  }
}

module.exports = App;

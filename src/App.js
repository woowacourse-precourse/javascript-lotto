const LottoGameMachine = require('./LottoGameMachine');

class App {
  play() {
    const lottoGameMachine = new LottoGameMachine();
    lottoGameMachine.startLottoGameMachine();
  }
}

module.exports = App;

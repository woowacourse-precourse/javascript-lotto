const LottoGameMachine = require('./LottoGameMachine');

class App {
  play() {
    const lottoGameMachine = new LottoGameMachine();
    lottoGameMachine.startLottoGameMachine();
  }
}

const app = new App();
app.play();

module.exports = App;

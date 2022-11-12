const LottoMachine = require("./LottoMachine");

class App {
  play() {
    const lottoMachine = new LottoMachine();
    lottoMachine.start();
  }
}

const lottoGame = new App();
lottoGame.play();

module.exports = App;

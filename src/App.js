const LottoController = require('./LottoController');

class App {
  lottoController = new LottoController();

  play() {
    this.lottoController.start();
  }
}

const app = new App();
app.play();

module.exports = App;

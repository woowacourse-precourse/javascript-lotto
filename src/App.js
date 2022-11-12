const LottoGameController = require('./controller/LottoGameController');

class App {
  constructor() {
    this.lottoGameController = new LottoGameController();
  }
  play() {
    this.lottoGameController.start();
  }
}

module.exports = App;

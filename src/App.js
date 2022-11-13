const LottoGameController = require('./controller/LottoGameController');
const LottoGameModel = require('./model/LottoGameModel');

class App {
  constructor() {
    this.lottoGameModel = new LottoGameModel();
    this.lottoGameController = new LottoGameController(this.lottoGameModel);
  }
  play() {
    this.lottoGameController.start();
  }
}

module.exports = App;

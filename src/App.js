const LottoGameController = require('./controller/LottoGameController');
const LottoGameModel = require('./model/LottoGameModel');
const LottoGameView = require('./view/LottoGameView');

class App {
  constructor() {
    this.lottoGameModel = new LottoGameModel();
    this.lottoGameView = new LottoGameView();
    this.lottoGameController = new LottoGameController(
      this.lottoGameModel,
      this.lottoGameView
    );
  }
  play() {
    this.lottoGameController.start();
  }
}

module.exports = App;

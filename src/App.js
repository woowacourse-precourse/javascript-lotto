const LottoGameController = require('./controller/LottoGameController');
const CalculatorModel = require('./model/CalculatorModel');
const LottoGameModel = require('./model/LottoGameModel');
const LottoGameView = require('./view/LottoGameView');

class App {
  constructor() {
    this.lottoGameModel = new LottoGameModel();
    this.lottoGameView = new LottoGameView();
    this.calculatorModel = new CalculatorModel();
    this.lottoGameController = new LottoGameController(
      this.lottoGameModel,
      this.lottoGameView,
      this.calculatorModel
    );
  }
  play() {
    this.lottoGameController.start();
  }
}

module.exports = App;

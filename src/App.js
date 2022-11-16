const LottoGameTool = require('./LottoGameTool');
class App {
  constructor() {
    this.lottoGame = new LottoGameTool;
  }
  play() {
    this.lottoGame.lottoBuyStart();
  }
}

module.exports = App;

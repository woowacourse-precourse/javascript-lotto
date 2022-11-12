const LottoGame = require('./LottoGame');

class App {

  constructor() {
    // Utils.print('로또 게임을 시작합니다~!');
    this.lottoGame = new LottoGame();
  }
  
  play() {
    this.lottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;

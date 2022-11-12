const game = require('./LottoGame');

class App {

  constructor() {
    // Utils.print('로또 게임을 시작합니다~!');
  
    this.lottoGame = new game.GameBuilder()
      .lottoLength(6)
      .maxNumber(45)
      .minPrice(1000)
      .build();
  }
  
  play() {
    this.lottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;

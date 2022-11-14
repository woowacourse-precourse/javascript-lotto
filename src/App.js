const game = require('./LottoGame');

class App {

  constructor() {
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

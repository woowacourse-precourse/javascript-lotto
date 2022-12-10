const game = require("./LottoGame");
const GAME_SETTING = require("./constants/GameConfig");

class App {
  constructor() {
    this.lottoGame = new game.GameBuilder()
      .lottoLength(GAME_SETTING.LOTTO_LEGNTH)
      .maxNumber(GAME_SETTING.MAX_NUMBER)
      .minPrice(GAME_SETTING.MIN_PRICE)
      .build();
  }

  play() {
    this.lottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;

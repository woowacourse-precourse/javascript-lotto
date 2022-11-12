const { Console } = require("@woowacourse/mission-utils");

const Game = require('./Game');

class App {
  game = new Game();

  play() {
    this.game.gameStart();
  }
}

module.exports = App;

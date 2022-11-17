const Game = require("./Game");

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.game.startLottery();
    this.game.EndLottery();
  }
}

module.exports = App;
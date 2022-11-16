const Game = require("./Game");

class App {
  play() {
    const game = new Game();
    game.init();
  }
}

module.exports = App;

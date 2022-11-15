const Game = require('./Game');

class App {
  #game;

  initGame() {
    this.#game = new Game();
  }

  play() {
    this.initGame();
  }
}

module.exports = App;

const Game = require('./controller/Game');

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  play() {
    this.#game.playLotto();
  }
}

module.exports = App;

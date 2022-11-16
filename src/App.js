const Game = require('../components/Game');

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  play() {
    this.#game.start();
  }
}

const app = new App();
app.play();

module.exports = App;

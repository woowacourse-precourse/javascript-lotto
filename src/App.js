const Game = require('./controllers/Game');

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  play() {
    this.#game.playLotto();
  }
}

const app = new App();
app.play();

module.exports = App;

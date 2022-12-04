const GameController = require('./GameController');

class App {
  #gameController = new GameController();

  play() {
    this.#gameController.readPurchase();
  }
}

const app = new App();
app.play();

module.exports = App;

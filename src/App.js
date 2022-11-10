const Player = require('./Player');
const Lotto = require('./Lotto');

class App {
  #player;

  #lotto;

  constructor() {
    this.#lotto = new Lotto();
    this.#player = new Player();
  }

  play() {
    this.#player.purchaseLotto();
  }
}

const app = new App();
app.play();

module.exports = App;

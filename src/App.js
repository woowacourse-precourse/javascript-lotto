const GameManager = require('./GameManager');

class App {
  constructor() {
    this.play();
  }
  play() {
    new GameManager();
  }
}

module.exports = App;

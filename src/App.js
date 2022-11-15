const GameManager = require('./Controller/GameManager');

class App {
  constructor() {
    this.play();
  }
  play() {
    new GameManager();
  }
}

module.exports = App;

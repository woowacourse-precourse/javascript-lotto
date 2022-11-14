const Controller = require('./Controller');

class App {
  play() {
    const lotto = new Controller();
    lotto.startGame();
  }
}

module.exports = App;

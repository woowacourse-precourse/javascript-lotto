const Lotto = require('./Lotto');
const playLotto = require('./playLotto');

class App {
  play() {
    this.playLotto.playGame();
  }
}

module.exports = App;

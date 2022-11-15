const Lotto = require('./Lotto');
const PlayLotto = require('./playLotto');

class App {
  constructor() {
    this.PlayLotto = new PlayLotto();
  }
  
  play() {
    this.PlayLotto.playGame();
  }
}

module.exports = App;

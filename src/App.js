const LottoGame = require('./LottoGame.js');

class App {
  play() {
    const game = new LottoGame();
    game.start();
  }
}

const app = new App();
app.play();

module.exports = App;

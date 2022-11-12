const consoleWork = require('./ConsoleWork');
const Lotto = require('./Lotto');

class App {
  play() {
    Lotto.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;

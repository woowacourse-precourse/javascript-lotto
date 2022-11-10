const LottoGame = require('./core/LottoGame');
const User = require('./model/User');
const InputConsole = require('./view/InputConsole');
const OutputConsole = require('./view/OutputConsole');

class App {
  constructor() {
    this.inputConsole = new InputConsole();
    this.outputConsole = new OutputConsole();
    this.user = new User();
    this.lottoGame = new LottoGame(this.inputConsole, this.outputConsole, this.user);
  }

  play() {
    this.lottoGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;

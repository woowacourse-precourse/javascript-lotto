const consoleWork = require('./consoleWork');
const Lotto = require('./Lotto');
class App {
  constructor() {
    this.consoleWork = consoleWork;
    this.Lotto = Lotto;
  }
  play() {}
}

const app = new App();
app.play();

module.exports = App;

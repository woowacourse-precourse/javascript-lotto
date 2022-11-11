const {InputConsole, OutputConsole} = require('./Console');

class App {
  play() {
    const money = InputConsole.getMone();
  }
}

module.exports = App;

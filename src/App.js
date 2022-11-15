const Execution = require('./LottoExecution');
const lotto = new Execution();
class App {
  play() {
    lotto.play();
  }
}

module.exports = App;

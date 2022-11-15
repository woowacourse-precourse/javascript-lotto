const Lottery = require('./Lottery');
const lottery = new Lottery();

class App {
  play() {
    lottery.progress();
  }
}

module.exports = App;

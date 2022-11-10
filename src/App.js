const LotteryManager = require('./LotteryManager');

class App {
  play() {
    LotteryManager.start();
  }
}

module.exports = App;

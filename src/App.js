const LotteryManager = require('./LotteryManager');

class App {
  play() {
    LotteryManager.start();
  }
}

exports.module = App;

const LotteryManager = require('./LotteryManager');

class App {
  play() {
    const manager = new LotteryManager();
    manager.start();
  }
}

module.exports = App;

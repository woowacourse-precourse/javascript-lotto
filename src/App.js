const LotteryApp = require('./LotteryApp');

class App {
  #lotteryApp = new LotteryApp();

  play() {
    this.#lotteryApp.start();
  }
}

module.exports = App;

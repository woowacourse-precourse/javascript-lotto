const LotteryMachine = require('./LotteryMachine');
class App {
  constructor() {
    this.lotteryMachine = new LotteryMachine();
  }

  play() {
    const lottos = LotteryMachine.issueTicket();
  }

}

module.exports = App;

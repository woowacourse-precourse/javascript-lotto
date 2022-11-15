const LotteryMachine = require('./LotteryMachine');
const LottoNumberGenerator = require('./LottoNumberGenerator');

class App {
  constructor() {
    this.lotteryMachine = new LotteryMachine();
    this.lottoNumberGenerator = new LottoNumberGenerator();
  }

  play() {
    const lottos = LotteryMachine.issueTicket();
    this.drawLots();
  }

  drawLots() {
    this.lottoNumberGenerator.drawLottery();
    const winnerNumbers = this.lottoNumberGenerator.getNumbers();
    this.lotteryMachine.updateWinnerNumber(winnerNumbers);
  }

}
module.exports = App;

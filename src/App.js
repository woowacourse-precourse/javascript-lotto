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
    this.confirmWin(lottos);
  }

  drawLots() {
    this.lottoNumberGenerator.drawLottery();
    const winningNumbers = this.lottoNumberGenerator.getNumbers();
    this.lotteryMachine.updateWinnerNumber(winningNumbers);
  }

  confirmWin(lottos) {
    const winningStatistics = this.lotteryMachine.readQrCode(lottos);
    LotteryMachine.printWinResult(winningStatistics);
  }
}

module.exports = App;

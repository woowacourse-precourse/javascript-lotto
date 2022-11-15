const LotteryMachine = require('./components/LotteryMachine');
const LottoNumberGenerator = require('./components/LottoNumberGenerator');

class App {
  #lottos;

  constructor() {
    this.lotteryMachine = new LotteryMachine();
    this.lottoNumberGenerator = new LottoNumberGenerator();
  }

  play() {
    this.purchaseLotto();
    this.drawLots();
    this.confirmWin();
  }

  purchaseLotto() {
    const lottos = this.lotteryMachine.issueTicket();
    this.#lottos = lottos;
  }

  drawLots() {
    const winningNumbers = this.lottoNumberGenerator.drawLottery();
    this.lotteryMachine.updateWinnerNumber(winningNumbers);
  }

  confirmWin() {
    const winningStatistics = this.lotteryMachine.readQrCode(this.#lottos);
    this.lotteryMachine.printWinResult(winningStatistics);
  }
}

module.exports = App;

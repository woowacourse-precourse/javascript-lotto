const LottoView = require("./LottoView");
const LottoModel = require("./LottoModel");
const lottoView = new LottoView();
const lottoModel = new LottoModel();

class App {
  async play() {
    let amount = await lottoView.getPurchaseAmount();
    amount /= 1000;
    const lottos = lottoModel.createLottos(amount);
    lottoView.printLottos(amount, lottos);
    const winningNumbers = await lottoView.getWinningNumbers();
    const bonusNumber = await lottoView.getBonusNumber();
    lottoModel.checkWinning(winningNumbers, bonusNumber);
  }
}

const app = new App();
app.play();

module.exports = App;

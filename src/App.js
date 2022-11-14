const LottoView = require("./LottoView");
const LottoModel = require("./LottoModel");
const lottoView = new LottoView();
const lottoModel = new LottoModel();

class App {
  async play() {
    const purchaseAmount = await lottoView.getPurchaseAmount();
    const lottos = lottoModel.createLottos(purchaseAmount / 1000);
    lottoView.printLottos(purchaseAmount, lottos);
    let winningNumbers = await lottoView.getWinningNumbers();
    winningNumbers = winningNumbers.map(Number);
    const bonusNumber = await lottoView.getBonusNumber();

    const winningRank = lottoModel.checkWinning(
      winningNumbers,
      Number(bonusNumber)
    );
    lottoView.printWinnings(winningRank);
    const totalYield = lottoModel.calcYield(purchaseAmount);
    lottoView.printTotalYield(totalYield);
  }
}

module.exports = App;

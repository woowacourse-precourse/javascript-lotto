const LottoView = require("./LottoView");
const LottoModel = require("./LottoModel");
const lottoView = new LottoView();
const lottoModel = new LottoModel();

class App {
  async play() {
    const purchaseAmount = await lottoView.getPurchaseAmount();

    const lottos = lottoModel.createLottos(purchaseAmount / 1000);
    lottoView.printLottos(purchaseAmount / 1000, lottos);

    let winningNumbers = await lottoView.getWinningNumbers();
    const bonusNumber = await lottoView.getBonusNumber();
    const winningRank = lottoModel.checkWinning(
      winningNumbers.map(Number),
      Number(bonusNumber)
    );
    lottoView.printWinnings(winningRank);

    const totalYield = lottoModel.calcYield(purchaseAmount);
    lottoView.printTotalYield(totalYield);
  }
}

module.exports = App;

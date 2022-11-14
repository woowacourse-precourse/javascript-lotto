const Utils = require("./utils/Utils");
const LottoSeller = require("./domain/LottoMahcine");
const YieldCalculator = require("./domain/YieldCalculator");
const RankCalculator = require("./domain/RankCalculator");
const WinningLotto = require("./domain/WinningLotto");
const { MESSAGE } = require("./utils/messages");

class App {
  #playerLottos;
  #winningLotto;

  play() {
    this.purchaseProcess();
  }

  purchaseProcess() {
    Utils.readLine(`${MESSAGE.ENTER_PURCHASE_AMOUNT}\n`, (moneyInput) => {
      const lottoSeller = new LottoSeller(moneyInput);

      this.#playerLottos = lottoSeller.getLottos();
      Utils.printPurchasedLotto(this.#playerLottos);

      this.winningNumberProcess();
    });
  }

  winningNumberProcess() {
    Utils.readLine(`\n${MESSAGE.ENTER_WINNING_NUMBER}\n`, (winningNumberInput) => {
      this.bonusNumberProcess(winningNumberInput);
    });
  }

  bonusNumberProcess(winningNumberInput) {
    Utils.readLine(`\n${MESSAGE.ENTER_BONUS_NUMBER}\n`, (bonusNumberInput) => {
      const winningNumber = Utils.separateByComma(winningNumberInput);
      const bonusNumber = Number(bonusNumberInput);
      this.#winningLotto = new WinningLotto(winningNumber, bonusNumber);

      this.resultProcess();
    });
  }

  resultProcess() {
    const rankCalculator = new RankCalculator(this.#playerLottos, this.#winningLotto);
    const rankCountArray = rankCalculator.getRankCountArray();

    const purchaseAmount = this.#playerLottos.length * 1000;
    const yieldCalculator = new YieldCalculator(purchaseAmount, rankCountArray);
    const prizeYield = yieldCalculator.getPrizeYield();

    Utils.printWinningResult(rankCountArray, prizeYield);
    Utils.close();
  }
}

const app = new App();
app.play();

module.exports = App;

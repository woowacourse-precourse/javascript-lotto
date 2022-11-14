const Utils = require("./utils/Utils");
const LottoSeller = require("./domain/LottoSeller");
const LottoGenerator = require("./domain/LottoGenerator");
const PrizeCalculator = require("./domain/PrizeCalculator");
const RankCalculator = require("./domain/RankCalculator");
const WinningLotto = require("./WinningLotto");
const { MESSAGE } = require("./utils/messages");

class App {
  #playerLottos;
  #winningLotto;

  play() {
    this.purchaseProcess();
  }

  purchaseProcess() {
    Utils.readLine(`${MESSAGE.ENTER_PURCHASE_AMOUNT}\n`, (moneyInput) => {
      const lottoSeller = new LottoSeller();
      const lottoGenerator = new LottoGenerator();

      const purchaseCount = lottoSeller.getPurchaseCount(moneyInput);
      this.#playerLottos = lottoGenerator.getLottos(purchaseCount);

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
    const rankCalculator = new RankCalculator();
    const prizeCalculator = new PrizeCalculator();

    const rankCount = rankCalculator.getRankCount(this.#playerLottos, this.#winningLotto);

    const playerMoney = this.#playerLottos.length * 1000;
    const prizeMoney = prizeCalculator.getPrizeMoney(rankCount);
    const rateOfReturn = prizeCalculator.getRateOfReturn(playerMoney, prizeMoney);

    Utils.printWinningResult(rankCount, rateOfReturn);
    Utils.close();
  }
}

module.exports = App;

const LottoMachine = require("./domain/LottoMachine");
const LottoStatistics = require("./domain/LottoStatistics");
const View = require("./View");
const Lotto = require("./Lotto");
const Utils = require("./Utils");
const ERROR_MESSAGES = require("./errorMessages");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.buyingLottos = null;
    this.winningLotto = null;
  }

  play() {
    this.showMoneyView();
  }

  showMoneyView() {
    View.inputMoney((money) => {
      if (Number.isNaN(Number(money))) {
        throw new Error(ERROR_MESSAGES.MONEY_VALUE);
      }
      this.buyingLottos = this.lottoMachine.buy(parseInt(money, 10));
      this.showLottosView();
    });
  }

  showLottosView() {
    View.printBuyingLottos(this.buyingLottos);
    this.showWinningNumbersView();
  }

  showWinningNumbersView() {
    View.inputWinningNumbers((winningNumbers) => {
      this.winningLotto = new Lotto(
        Utils.transformStringToNumberArray(winningNumbers),
      );
      this.showBonusNumberView();
    });
  }

  showBonusNumberView() {
    View.inputBonusNumber((bonusNumber) => {
      this.winningLotto.addBonusNumber(parseInt(bonusNumber, 10));
      this.showStatsView();
    });
  }

  showStatsView() {
    const lottoStatistics = new LottoStatistics(this.winningLotto);
    const rankCounter = lottoStatistics.createRankCounter(this.buyingLottos);
    const profit = lottoStatistics.getProfit(this.buyingLottos);

    View.printStatistics(rankCounter, profit);
    View.close();
  }
}

module.exports = App;

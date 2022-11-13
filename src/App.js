const Utils = require("./Utils");
const LottoSeller = require("./LottoSeller");
const LottoGenerator = require("./LottoGenerator");
const PrizeCalculator = require("./PrizeCalculator");
const RankCalculator = require("./RankCalculator");
const WinningLotto = require("./WinningLotto");

class App {
  play() {
    this.purchaseProcess();
  }

  purchaseProcess() {
    Utils.readLine("구입금액을 입력해 주세요.\n", (moneyInput) => {
      const lottoSeller = new LottoSeller();
      const lottoGenerator = new LottoGenerator();

      const purchaseCount = lottoSeller.getPurchaseCount(moneyInput);
      this.playerLottos = lottoGenerator.getLottos(purchaseCount);

      Utils.printPurchasedLotto(this.playerLottos);

      this.winningNumberProcess();
    });
  }

  winningNumberProcess() {
    Utils.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumberInput) => {
      this.bonusNumberProcess(winningNumberInput);
    });
  }

  bonusNumberProcess(winningNumberInput) {
    Utils.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumberInput) => {
      const winningNumber = Utils.separateByComma(winningNumberInput);
      const bonusNumber = Number(bonusNumberInput);
      this.winningLotto = new WinningLotto(winningNumber, bonusNumber);

      this.resultProcess();
    });
  }

  resultProcess() {
    const rankCalculator = new RankCalculator();
    const prizeCalculator = new PrizeCalculator();

    const rankCount = rankCalculator.getRankCount(this.playerLottos, this.winningLotto);

    const playerMoney = this.playerLottos.length * 1000;
    const prizeMoney = prizeCalculator.getPrizeMoney(rankCount);
    const rateOfReturn = prizeCalculator.getRateOfReturn(playerMoney, prizeMoney);

    Utils.printWinningResult(rankCount, rateOfReturn);
    Utils.close();
  }
}

const app = new App();
app.play();

module.exports = App;

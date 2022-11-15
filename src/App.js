const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const LottoResultManager = require("./LottoResultManager");
const validator = require("./validator");

class App {
  play() {
    this.getUserPayment();
  }

  getUserPayment() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (payment) => {
      this.userPayment = Number(payment);
      this.createLotto(payment);
    });
  }

  createLotto(payment) {
    const lottoGenerator = new LottoGenerator(payment);
    this.lotteries = lottoGenerator.createLottos();
    this.getWinNumber();
  }

  getWinNumber() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (winNumber) => {
      validator.checkWinNumber(winNumber);
      this.winNumber = winNumber;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      validator.checkBonusNumber(bonusNumber, this.winNumber);
      const winRanks = this.getLottoRank(Number(bonusNumber), this.lotteries, this.winNumber);
      this.handleResult(winRanks);
    });
  }

  getLottoRank(bonusNumber, lotteries, winNumber) {
    const winRanks = lotteries.map((lotto) => {
      lotto.compareWith(winNumber);
      lotto.has(bonusNumber);
      return lotto.setRank();
    });

    return winRanks;
  }

  handleResult(winRanks) {
    const lottoResultManager = new LottoResultManager();

    lottoResultManager.countWin(winRanks);
    lottoResultManager.makeWinHistoryMessage();
    lottoResultManager.calculateProfitRate(this.userPayment);
    lottoResultManager.printResult();

    MissionUtils.Console.close();
  }
}

module.exports = App;

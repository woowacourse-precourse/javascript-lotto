const UI = require("./UI");
const LottoArray = require("./LottoArray");
const Stats = require("./Stats");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    const information = await this.getInformation();

    const totalStats = this.processInformation(information);

    this.publishResults(totalStats);

    this.terminate();
  }

  async getInformation() {
    const cash = await UI.getCash();

    const purchased = new LottoArray(cash);

    UI.printPurchasedLottoStatus(purchased);

    const { winningNumbers, bonusNumber } = await UI.getWinningNumbers();

    return {
      winningNumbers,
      bonusNumber,
      purchased,
      cash,
    };
  }

  processInformation(information) {
    const totalStats = new Stats(information);
    return totalStats;
  }

  publishResults(totalStats) {
    UI.printTotalStats(totalStats);
  }

  terminate() {
    MissionUtils.Console.close();
  }
}

module.exports = App;

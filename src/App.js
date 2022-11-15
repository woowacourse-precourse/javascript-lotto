const UI = require("./UI");
const LottoArray = require("./LottoArray");

class App {
  play() {}

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
}

module.exports = App;

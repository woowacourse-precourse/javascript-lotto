const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTO } = require("./lib/constants");
const User = require("./User");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.purchase();
  }

  exit() {
    MissionUtils.Console.close();
  }

  purchase() {
    this.user.readAmount(MESSAGE.AMOUNT, (amount) => {
      this.user.lottoList = Lotto.purchase(amount);
      this.printPurchaseResult();
      this.setWinNumbers();
    });
  }

  setWinNumbers() {
    this.user.readWinNumbers(MESSAGE.WIN_NUMBERS, (winNumbers) => {
      Lotto.prototype.winNumbers = winNumbers.split(",").map(Number);
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    this.user.readBonusNumber(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      Lotto.prototype.bonusNumber = bonusNumber;
      this.draw();
    });
  }

  draw() {
    const resultList = this.user.lottoList.map(Lotto.draw);
    const statistics = this.getStatistics(resultList);

    this.printStatistics(statistics);
    this.exit();
  }

  getStatistics(resultList) {
    let earnings = 0;
    const statistics = {};

    resultList.forEach((result) => {
      statistics[result] ? (statistics[result] += 1) : (statistics[result] = 1);
      result in LOTTO.PRIZE && (earnings += LOTTO.PRIZE[result]);
    });

    // prettier-ignore
    statistics.earningsRate = (earnings / (LOTTO.PRICE * resultList.length) * 100).toFixed(1);

    return statistics;
  }

  printStatistics(statistics) {
    const awardsOrder = [3, 4, 5, "BONUS", 6];

    this.printMessage(MESSAGE.DIVIDER);

    awardsOrder.forEach((awards) =>
      this.printMessage(
        // prettier-ignore
        `${MESSAGE.STATISTICS[awards]} (${LOTTO.PRIZE[awards].toLocaleString()}원) - ${statistics[awards] ?? 0}개`
      )
    );

    this.printMessage(MESSAGE.EARNING_RATE(statistics.earningsRate));
  }

  printPurchaseResult() {
    this.printMessage(MESSAGE.PURCHASE(this.user.lottoList.length));

    this.user.lottoList.forEach((lotto) => {
      this.printMessage(JSON.stringify(lotto.numbers).replaceAll(",", ", "));
    });
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;

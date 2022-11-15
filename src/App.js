const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTO, AWARDS_ORDER } = require("./lib/constants");
const {
  getDefaultMessages,
  getMessagesByStatistics,
} = require("./util/message");

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
      Lotto.setWinNumbers(winNumbers.split(",").map(Number));
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    this.user.readBonusNumber(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      Lotto.setBonusNumber(bonusNumber);
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
    this.printMessage(MESSAGE.DIVIDER);

    AWARDS_ORDER.forEach((awards) =>
      // prettier-ignore
      this.printMessage(getMessagesByStatistics(awards,statistics[awards] ?? 0))
    );

    this.printMessage(
      getDefaultMessages.earnings_rate(statistics.earningsRate)
    );
  }

  printPurchaseResult() {
    this.printMessage(getDefaultMessages.purchase(this.user.lottoList.length));

    this.user.lottoList.forEach((lotto) => {
      this.printMessage(`[${lotto.numbers.join(", ")}]`);
    });
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;

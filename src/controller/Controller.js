const { Random } = require("@woowacourse/mission-utils");
const { LOTTO, QUERY, WINNING_PRICE_MAP, ERROR_MESSAGE } = require("../constants");
const Payment = require("../model/Payment");
const QuickPick = require("../model/QuickPick");
const Lotto = require("../model/Lotto");
const Bonus = require("../model/Bonus");

class Controller {
  view;
  paymentModel;

  constructor(view) {
    this.view = view;
    this.buyLotto();
  }

  buyLotto() {
    this.view.readLine(QUERY.BUY, (payment) => {
      const lottoCount = this.calcLottoCount(payment);
      this.paymentModel = new Payment(payment);
      this.view.printLottoCount(lottoCount);
      this.createQuickPickList(lottoCount);
    });
  }

  createQuickPickList(lottoCount) {
    const quickPickList = [];

    while (quickPickList.length < lottoCount) {
      const lottoNumbers = this.createQuickPick();
      if (quickPickList.indexOf(lottoNumbers) === -1) {
        quickPickList.push(lottoNumbers);
      }
    }

    this.quickPickModel = new QuickPick(quickPickList);
    this.view.printQuickPick(quickPickList);
  }

  inputWinningNumber() {
    this.view.readLine(QUERY.WINNING, (number) => {
      this.validateWinningNumber(number);
      const numbers = number.split(",").map(Number);
      this.lottoModel = new Lotto(numbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    this.view.readLine(QUERY.BONUS, (bonus) => {
      const winningNumber = this.lottoModel.getNumbers();

      this.bonusModel = new Bonus(bonus, winningNumber);
      this.calcStatistics();
    })
  }

  calcWinningResult() {
    const numbers = this.lottoModel.getNumbers();
    const quickPicks = this.quickPickModel.getQuickPick();

    return quickPicks.reduce((result, quickPick) => {
      const score = numbers.filter((number) => quickPick.includes(number)).length;
      const count = this.calcWinningCount(quickPick, score);
      if (result[count]) {
        result[count] += 1;
      } else {
        result[count] = 1
      }
      return result;
    }, {});
  }

  calcWinningCount(quickPick, score) {
    const bonus = this.bonusModel.getBonus();

    if (score === 5) {
      if (quickPick.includes(bonus)) {
        return "6"
      }
      return "5";
    }

    if (score === 6) {
      return "7";
    }

    return score;
  }

  validateWinningNumber(number) {
    if (!number.includes(",")) {
      throw new Error(ERROR_MESSAGE.COMMA);
    }
    if (number.split(",").length !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
  }
}

module.exports = Controller;


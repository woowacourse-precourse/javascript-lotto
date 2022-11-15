const { Random } = require("@woowacourse/mission-utils");
const { LOTTO, QUERY, WINNING_PRICE_MAP, ERROR_MESSAGE } = require("../constants");
const Payment = require("../model/Payment");
const QuickPick = require("../model/QuickPick");
const Lotto = require("../model/Lotto");

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
      const numbers = number.split(",").map(Number);
      this.lottoModel = new Lotto(numbers);
    });
  }
}

module.exports = Controller;


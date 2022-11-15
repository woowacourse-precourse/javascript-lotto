const { Random } = require("@woowacourse/mission-utils");
const { LOTTO, QUERY, WINNING_PRICE_MAP, ERROR_MESSAGE } = require("../constants");
const Payment = require("../model/Payment");
const QuickPick = require("../model/QuickPick");

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
    });
  }
}

module.exports = Controller;


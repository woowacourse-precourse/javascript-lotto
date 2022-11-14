const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const Validation = require("./Validation");
const Operator = require("./LottoGameOperator");

class LottoGame {
  #purchaseAmount;
  #LottoList;

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (input) => {
      this.#purchaseAmount = Number(input);
      Validation.validatePurchaseAmount(this.#purchaseAmount);
      const lottoQuantity = Operator.countLottoTickets(this.#purchaseAmount);

      Operator.showLottoQuantity(lottoQuantity);
    });
  }
}

module.exports = LottoGame;

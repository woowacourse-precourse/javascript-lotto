const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const Validation = require("./Validation");
const LottoGameOperator = require("./LottoGameOperator");

class LottoGame {
  #purchaseAmount;
  #LottoList;

  constructor() {
    this.operator = new LottoGameOperator();
  }

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (input) => {
      this.#purchaseAmount = Number(input);
      Validation.validatePurchaseAmount(this.#purchaseAmount);
      const lottoQuantity = this.operator.countLottoTickets(
        this.#purchaseAmount
      );

      this.operator.showLottoQuantity(lottoQuantity);
      this.#LottoList = this.operator.createLottoNumbers(lottoQuantity);
    });
  }
}

module.exports = LottoGame;

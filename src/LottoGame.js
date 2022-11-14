const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./Constants/Constants");
const Validation = require("./Validation");
class LottoGame {
  #purchaseAmount;

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (input) => {
      this.#purchaseAmount = Number(input);
      Validation.validatePurchaseAmount(this.#purchaseAmount);
    });
  }
}

module.exports = LottoGame;

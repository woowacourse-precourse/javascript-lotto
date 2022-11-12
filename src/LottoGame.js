const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, ERROR_MESSAGE } = require("./constants/index");
const { isNumberType } = require("./utils/index");

class LottoGame {
  #purchaseAmount;

  enter() {
    Console.readLine(GAME_MESSAGE.INPUT_PURCHASE_AMOUNT, (inputAmount) => {
      if (this.isPurchaseAmountValid(inputAmount))
        this.#purchaseAmount = inputAmount;
    });
  }

  isPurchaseAmountValid(purchaseAmount) {
    if (!isNumberType(purchaseAmount)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }
  }
}

module.exports = LottoGame;

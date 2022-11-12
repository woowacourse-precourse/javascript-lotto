const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("./constants/index");

class LottoGame {
  #purchaseAmount;

  enter() {
    Console.readLine(GAME_MESSAGE.INPUT_PURCHASE_AMOUNT, (inputAmount) => {
      this.#purchaseAmount = inputAmount;
      console.log(inputAmount);
    });
  }
}

module.exports = LottoGame;

const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_VALUE,
} = require("./constants/index");
const Lotto = require("./Lotto");
const {
  isNumberType,
  isThousandUnits,
  generateRandomNumbers,
} = require("./utils/index");

class LottoGame {
  #purchaseAmount;
  #lottoList;

  enter() {
    Console.readLine(GAME_MESSAGE.INPUT_PURCHASE_AMOUNT, (inputAmount) => {
      if (this.isPurchaseAmountValid(inputAmount)) {
        this.#purchaseAmount = inputAmount;
        this.generateLottoList();
        console.log(this.#lottoList);
      }
    });
  }

  isPurchaseAmountValid(purchaseAmount) {
    if (!isNumberType(purchaseAmount)) {
      throw ERROR_MESSAGE.TYPE_ERROR;
    }

    if (!isThousandUnits(purchaseAmount)) {
      throw ERROR_MESSAGE.UNIT_ERROR;
    }
    return true;
  }

  generateLottoList() {
    this.#lottoList = [];
    let lottoCnt = Math.floor(this.#purchaseAmount / LOTTO_VALUE.UNIT);

    for (let i = 0; i < lottoCnt; i++) {
      let lotto = new Lotto(generateRandomNumbers());
      this.#lottoList.push(lotto);
    }
  }
}

module.exports = LottoGame;

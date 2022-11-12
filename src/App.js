const { Console, Random } = require("@woowacourse/mission-utils");
const {
  PRICE_PER_LOTTO,
  LOTTO_LENGTH,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./domain/constant");
const Util = require("./Util");
const Lotto = require("./Lotto");

class App {
  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (purchaseAmount) =>
      this.validatePerchaseAmount(purchaseAmount)
    );
  }

  validatePerchaseAmount(purchaseAmount) {
    if (!Util.isNumericInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_NUMERIC_INPUT);
    }
    if (!Util.isPositiveNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_POSITIVE_INPUT);
    }
    if (Util.isZeroStartInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.ZERO_START_INPUT);
    }
    if (!Util.isDivisibleBy(purchaseAmount, PRICE_PER_LOTTO)) {
      throw new Error(ERROR_MESSAGE.NON_DIVISIBLE_INPUT);
    }
    return this.countLottoQuantity(purchaseAmount);
  }

  countLottoQuantity(purchaseAmount) {
    const lottoQuantity = purchaseAmount / PRICE_PER_LOTTO;
    Console.print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
    return this.makeLottos(lottoQuantity);
  }

  makeLottos(lottoQuantity) {
    const lottos = [];
    while (lottos.length < lottoQuantity) {
      const lottoNumbers = Util.getSortedArrayInAsc(this.getLottoNumbers());
      lottos.push(new Lotto(lottoNumbers));
    }
    return;
  }

  getLottoNumbers() {
    const lottoNumbers = [];
    while (!Util.hasNElements(lottoNumbers, LOTTO_LENGTH)) {
      const number = Random.pickNumberInRange(1, 45);
      if (!lottoNumbers.includes(number)) {
        lottoNumbers.push(number);
      }
    }
    return lottoNumbers;
  }
}

module.exports = App;

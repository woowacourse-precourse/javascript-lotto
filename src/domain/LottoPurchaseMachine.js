const { Random } = require("@woowacourse/mission-utils");
const {
  LOTTO_PRICE,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
  LOTTO_DIGITS,
} = require("../constants/condition.js");
const Validation = require("../Validation.js");
const Lotto = require("../Lotto.js");

class LottoPerchaseMachine {
  purchaseAmount;

  insertMoney(purchaseAmount) {
    Validation.validatePurchaseAmount(purchaseAmount);
    this.purchaseAmount = Number(purchaseAmount);
  }

  purchaseLottos() {
    const lottoQuantity = this.getLottoQuantity(this.purchaseAmount);

    return this.createLottos(lottoQuantity);
  }

  getLottoQuantity(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }

  createLottos(lottoQuantity) {
    return Array.from({ length: lottoQuantity }, () => {
      const lottoNumbers = this.generateLottoNumbers();
      const ascendingNumbers = lottoNumbers.sort((numA, numB) => numA - numB);

      return new Lotto(ascendingNumbers);
    });
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUM_MIN_RANGE, LOTTO_NUM_MAX_RANGE, LOTTO_DIGITS);
  }
}

module.exports = LottoPerchaseMachine;

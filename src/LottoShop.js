const { Random } = require('@woowacourse/mission-utils');
const { CONDITION } = require('./utils/constant');
const Validator = require('./Vaildator');
const Output = require('./Output');

class LottoShop {
  #purchasedNumbers;

  constructor(purchaseAmount) {
    this.validator = new Validator(purchaseAmount);
    this.validator.purchaseAmount();
  }

  countLottoAmount(purchaseAmount) {
    return purchaseAmount / CONDITION.LOTTO_PRICE;
  }

  sortPurchasedNumbers(purchasedNumbers) {
    return purchasedNumbers.sort((a, b) => a - b);
  }

  createPurchasedNumbers(lottoAmount) {
    const purchasedNumbers = [];

    for (let amount = 1; amount <= lottoAmount; amount++) {
      const purchasedNumber = Random.pickUniqueNumbersInRange(
        CONDITION.MIN_NUMBER,
        CONDITION.MAX_NUMBER,
        CONDITION.LOTTO_LENGTH
      );

      purchasedNumbers.push(this.sortPurchasedNumbers(purchasedNumber));
    }

    return purchasedNumbers;
  }

  setpurchasedNumbers(lottoAmount) {
    this.#purchasedNumbers = this.createPurchasedNumbers(lottoAmount);
  }

  buyLotto(purchaseAmount) {
    const lottoAmount = this.countLottoAmount(purchaseAmount);
    this.setpurchasedNumbers(lottoAmount);

    new Output().lottoNumbers(lottoAmount, this.#purchasedNumbers);
  }

  getPurchasedNumbers() {
    return this.#purchasedNumbers;
  }
}

module.exports = LottoShop;

const { Random } = require('@woowacourse/mission-utils');
const Validator = require('./Vaildator');
const Output = require('./Output');

class LottoShop {
  #purchasedNumbers;

  constructor(purchaseAmount) {
    this.validator = new Validator(purchaseAmount);
    this.validator.purchaseAmount();
  }

  countLottoAmount(purchaseAmount) {
    return purchaseAmount / 1000;
  }

  sortPurchasedNumbers() {
    const purchasedNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return purchasedNumbers.sort((a, b) => a - b);
  }

  createPurchasedNumbers(lottoAmount) {
    const purchasedNumbers = [];

    for (let amount = 1; amount <= lottoAmount; amount++)
      purchasedNumbers.push(this.sortPurchasedNumbers());

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

const Lotto = require('./Lotto');
const NumberGenerator = require('./NumberGenerator');
const { ERROR } = require('./constants/constants');

class LottoManager {
  issueLotto(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    const lottoArray = [];
    const numberOfLotto = purchaseAmount / 1000;
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoNumbers = new NumberGenerator().createLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      lottoArray.push(lotto);
    }
    return lottoArray;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!this.isNumber(purchaseAmount)) {
      throw new Error(ERROR.PURCHASE_AMOUNT.NOT_NUMBER);
    }
    if (!this.isDivisibleByLottoPrice(purchaseAmount)) {
      throw new Error(ERROR.PURCHASE_AMOUNT.NOT_DIVISIBLE);
    }
    if (this.isLessThanLottoPrice) {
      throw new Error(ERROR.PURCHASE_AMOUNT.LESS);
    }
  }

  isNumber(input) {
    return input.match(/^[0-9]+$/);
  }

  isDivisibleByLottoPrice(input) {
    return input % 1000 === 0;
  }

  isLessThanLottoPrice(input) {
    return input < 1000;
  }
}

module.exports = LottoManager;

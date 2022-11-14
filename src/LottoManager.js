const { Random } = require('@woowacourse/mission-utils');

const { ERROR } = require('./lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

const Lotto = require('./Lotto');

class LottoManager {
  #lottos = [];

  initLottos(purchaseAmountInput) {
    this.validatePurchaseAmount(purchaseAmountInput);
    this.#lottos = this.issueLottos(parseInt(purchaseAmountInput, 10));
  }

  validatePurchaseAmount(purchaseAmountInput) {
    switch (true) {
      case this.isNotNumber(purchaseAmountInput):
        throw new Error(ERROR.PURCHASE_AMOUNT.NOT_NUMBER);
      case this.isSmallerThanUnitPrice(
        parseInt(purchaseAmountInput, 10),
        LOTTO.UNIT_PRICE,
      ):
        throw new Error(ERROR.PURCHASE_AMOUNT.SMALLER);
      case this.isNotBeDividedByUnitPrice(
        parseInt(purchaseAmountInput, 10),
        LOTTO.UNIT_PRICE,
      ):
        throw new Error(ERROR.PURCHASE_AMOUNT.CANNOT_BE_DIVIDED);
    }
  }

  isNotNumber(numberInput) {
    return !/^\d+$/g.test(numberInput);
  }

  isNotBeDividedByUnitPrice(amount, unitPrice) {
    return amount % unitPrice !== 0;
  }

  isSmallerThanUnitPrice(amount, unitPrice) {
    return amount < unitPrice;
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / LOTTO.UNIT_PRICE;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      lottos.push(new Lotto(this.createLottoNumbers()));
    }

    return lottos;
  }

  createLottoNumbers() {
    const lottoNumbers = new Set();

    while (lottoNumbers.size < LOTTO.NUMBER_COUNT) {
      lottoNumbers.add(
        Random.pickNumberInRange(
          LOTTO.MIN_NUMBER_LIMIT,
          LOTTO.MAX_NUMBER_LIMIT,
        ),
      );
    }

    return [...lottoNumbers].sort((a, b) => a - b);
  }

  get lottos() {
    return this.#lottos;
  }
}

module.exports = LottoManager;

const { Random } = require('@woowacourse/mission-utils');

class Purchase {
  constructor(purchasePrice) {
    this.validate(purchasePrice);
  }

  validate(purchasePrice) {
    if (/[^0-9]/.test(purchasePrice)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000단위여야 합니다.');
    }
  }
}

module.exports = Purchase;

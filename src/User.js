const Lotto = require('./Lotto');
const { isDivisible } = require('./utils/utils');
const { ERROR, AMOUNT_UNIT } = require('./utils/constants');

class User {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    this.purchaseAmount = Number(purchaseAmount);
  }

  validate(amount) {
    if (!isDivisible(amount)) {
      throw new Error(ERROR.INDIVISIBLE);
    }
  }

  buyLotto() {
    const quantity = this.purchaseAmount / AMOUNT_UNIT;
    const lottos = [];
    for (let lottoQuantity = 0; lottoQuantity < quantity; lottoQuantity++) {
      lottos.push(Lotto.createAutoLotto());
    }

    this.lottos = lottos;

    return { quantity, lottos };
  }
}

module.exports = User;

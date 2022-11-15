const Lotto = require('./Lotto');
const { AMOUNT_UNIT } = require('./utils/constants');

class Buyer {
  constructor(purchaseAmount) {
    this.purchaseAmount = Number(purchaseAmount);
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

module.exports = Buyer;

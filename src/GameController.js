const { getCount, getRandomNumbers, issueLottos } = require('./Purchase');
const { readPurchaseAmount } = require('./InputView');

class GameController {
  #issuedLottos = [];

  readPurchase() {
    readPurchaseAmount(this.purchase.bind(this));
  }

  purchase(money) {
    const count = getCount(money);
    this.#issuedLottos = issueLottos(count, getRandomNumbers);
  }
}

module.exports = GameController;

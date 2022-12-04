const { getCount, getRandomNumbers, issueLottos } = require('./Purchase');
const { readPurchaseAmount } = require('./InputView');
const { printPurchase } = require('./OutputView');

class GameController {
  #issuedLottos = [];

  readPurchase() {
    readPurchaseAmount(this.purchase.bind(this));
  }

  purchase(money) {
    const count = getCount(money);
    this.#issuedLottos = issueLottos(count, getRandomNumbers);

    printPurchase(count, this.#issuedLottos);
  }
}

module.exports = GameController;

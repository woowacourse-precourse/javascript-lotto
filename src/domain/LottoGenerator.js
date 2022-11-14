const Utils = require("../Utils");
const Lotto = require("../Lotto");

class LottoGenerator {
  #generateSixNumber() {
    return Utils.getRandomeNumbers(1, 45, 6);
  }

  #generateLotto() {
    return new Lotto(this.#generateSixNumber());
  }

  getLottos(purchaseCount) {
    return Array.from({ length: purchaseCount }, () => this.#generateLotto());
  }
}

module.exports = LottoGenerator;

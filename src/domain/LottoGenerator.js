const Utils = require("../Utils");
const Lotto = require("../Lotto");
const { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH } = require("../constatnts");

class LottoGenerator {
  #generateSixNumber() {
    return Utils.getRandomeNumbers(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
  }

  #generateLotto() {
    return new Lotto(this.#generateSixNumber());
  }

  getLottos(purchaseCount) {
    return Array.from({ length: purchaseCount }, () => this.#generateLotto());
  }
}

module.exports = LottoGenerator;

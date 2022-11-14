const Utils = require("../utils/Utils");
const Lotto = require("../Lotto");
const { LOTTO_PRICE, MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH } = require("../utils/constants");
const { ERROR } = require("../utils/messages");

class LottoMachine {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validateType(money) {
    if (!Number(money)) {
      throw new Error(ERROR.AMOUNT_TYPE);
    }
  }

  #validateDivideThousand(money) {
    if (Number(money) % LOTTO_PRICE !== 0) {
      throw new Error(ERROR.AMOUNT_UNIT);
    }
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateDivideThousand(money);
  }

  #getPurchaseCount() {
    return this.#money / LOTTO_PRICE;
  }

  #generateSixNumber() {
    return Utils.getRandomeNumbers(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
  }

  #generateLotto() {
    return new Lotto(this.#generateSixNumber());
  }

  getLottos() {
    const purchaseCount = this.#getPurchaseCount();
    return Array.from({ length: purchaseCount }, () => this.#generateLotto());
  }
}

module.exports = LottoMachine;

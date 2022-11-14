const { LOTTO_PRICE } = require("../utils/constants");
const { ERROR } = require("../utils/messages");

class LottoSeller {
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

  getPurchaseCount(money) {
    this.#validate(money);
    return Number(money) / LOTTO_PRICE;
  }
}

module.exports = LottoSeller;

const { LOTTO_PRICE } = require("../utils/constants");

class LottoSeller {
  #validateType(money) {
    if (!Number(money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
  }

  #validateDivideThousand(money) {
    if (Number(money) % LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.");
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

const Utils = require("./Utils");
const Lotto = require("./Lotto");

class LottoGenerator {
  #validateType(money) {
    if (!Number(money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
  }

  #validateDivideThousand(money) {
    if (Number(money) % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.");
    }
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateDivideThousand(money);
  }

  #generateSixNumber() {
    return Utils.getRandomeNumbers(1, 45, 6);
  }

  #generateLotto() {
    return new Lotto(this.#generateSixNumber());
  }

  getPurchaseCount(money) {
    this.#validate(money);
    return Number(money) / 1000;
  }

  getLottos(purchaseCount) {
    return Array.from({ length: purchaseCount }, () => this.#generateLotto());
  }
}

module.exports = LottoGenerator;

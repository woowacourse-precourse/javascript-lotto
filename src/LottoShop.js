const MissionUtils = require("@woowacourse/mission-utils");
const RegExp = require("./constants/RegExp");
const ErrorMessages = require("./constants/ErrorMessages");

class LottoShop {
  #purchaseMoney;
  #lottoPrice;

  constructor(money) {
    this.#purchaseMoney = money;
    this.#lottoPrice = 1000;
    this.validatePurchaseMoney();
  }

  validatePurchaseMoney() {
    if (!RegExp.DIGIT_REG_EXP.test(this.#purchaseMoney))
      throw new Error(ErrorMessages.NOT_A_NUMBER);
    if (this.#purchaseMoney % this.#lottoPrice !== 0)
      throw new Error(ErrorMessages.NOT_A_MULTIPLE_1000);
  }

  getLottos() {
    this.lottosQuantity = parseInt(this.#purchaseMoney / this.#lottoPrice);
    const lottos = [];
    for (let i = 1; i <= this.lottosQuantity; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lottos.push(lotto);
    }
    return lottos;
  }

  getLottosQuantity() {
    return this.lottosQuantity;
  }
}

module.exports = LottoShop;

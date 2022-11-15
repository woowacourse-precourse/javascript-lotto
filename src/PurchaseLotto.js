const MissionUtils = require("@woowacourse/mission-utils");

class PurchaseLotto {
  #purchasedCount;

  constructor(money) {
    this.#purchasedCount = money / 1000;
  }

  returnPurchasedLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = PurchaseLotto;

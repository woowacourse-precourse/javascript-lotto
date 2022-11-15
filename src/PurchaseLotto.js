const MissionUtils = require("@woowacourse/mission-utils");

class PurchaseLotto {
  #purchasedCount;

  constructor(money) {
    this.#purchasedCount = money / 1000;
  }

  returnPurchasedLottoNumbersList() {
    const purchasedLottoList = [];
    for (let i = 1; i <= this.#purchasedCount; i++) {
      purchasedLottoList.push(
        this.returnPurchaseLottoNumbers().sort((a, b) => {
          return a - b;
        })
      );
    }
    return purchasedLottoList;
  }

  returnPurchasedLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = PurchaseLotto;

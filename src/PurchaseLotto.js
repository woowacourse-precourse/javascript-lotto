const MissionUtils = require("@woowacourse/mission-utils");
const { Helper } = require("./lib/Helper");

class PurchaseLotto {
  #purchasedCount;

  constructor(money) {
    Helper.checkValidPrice(money);
    this.#purchasedCount = money / 1000;
  }

  returnPurchasedLottoNumbersList() {
    const purchasedLottoList = [];
    for (let i = 1; i <= this.#purchasedCount; i++) {
      purchasedLottoList.push(
        this.returnPurchasedLottoNumbers().sort((a, b) => {
          return a - b;
        })
      );
    }
    return purchasedLottoList;
  }

  returnPurchasedLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottoCount() {
    MissionUtils.Console.print(this.#purchasedCount + "개를 구매했습니다.");
  }
}

module.exports = PurchaseLotto;

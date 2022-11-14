const MissionUtils = require("@woowacourse/mission-utils");

class User {
  purchaseAmount = 0;
  lottos = [];

  constructor() {
    this.getPurchaseAmount();
    this.purchaseLottos();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      let purchaseAmount = answer;
      this.validatePurchaseAmount(purchaseAmount);
      this.purchaseAmount = Number(purchaseAmount);
    });
  }

  validatePurchaseAmount(amount) {
    if (Number(amount) % 1000 !== 0) {
      throw new Error("[ERROR] 입력 금액은 1000원 단위여야 합니다.");
    }

    if (isNaN(Number(amount))) {
      throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.")
    }
  }

  purchaseLottos() {
    let lottosAmount = this.purchaseAmount / 1000;

    MissionUtils.Console.print(`${lottosAmount}개를 구매했습니다.\n`);

    for (let i = 0; i < lottosAmount; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(
        "[" +
          lotto[0] +
          ", " +
          lotto[1] +
          ", " +
          lotto[2] +
          ", " +
          lotto[3] +
          ", " +
          lotto[4] +
          ", " +
          lotto[5] +
          "]"
      );
      this.lottos.push(lotto);
    }
  }
}

module.exports = User;

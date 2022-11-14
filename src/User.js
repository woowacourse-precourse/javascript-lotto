const MissionUtils = require("@woowacourse/mission-utils");

class User {
  purchaseAmount;
  lottos;

  constructor() {
    this.getPurchaseAmount();
    this.purchaseLottos();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.validatePurchaseAmount(Number(answer));
      this.purchaseAmount = Number(answer);
    });
  }

  validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 입력 금액은 1000원 단위여야 합니다.");
    }
  }

  purchaseLottos() {
    const lottosAmount = this.purchaseAmount % 1000;

    MissionUtils.Console.print(`${lottosAmount}개를 구매했습니다.`);
    
    for (let i = 0; i < lottosAmount; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(lotto);
      this.lottos.push(lotto);
    }
  }
}

module.exports = User;

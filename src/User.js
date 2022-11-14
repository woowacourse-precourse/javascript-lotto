const MissionUtils = require("@woowacourse/mission-utils");

class User {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getPurchaseAmount() {
    let purchaseAmount = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.validatePurchaseAmount(Number(answer));
      purchaseAmount = Number(answer);
    });

    return purchaseAmount;
  }

  validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 입력 금액은 1000원 단위여야 합니다.");
    }
  }

  purchaseLottos() {
    const purchaseAmount = this.getPurchaseAmount();
    const lottos = [];

    const lottosAmount = purchaseAmount % 1000;

    MissionUtils.Console.print(`${lottosAmount}개를 구매했습니다.`);
    for (let i = 0; i < lottosAmount; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(lotto);
      lottos.push(lotto);
    }

    return lottos;
  }
}

module.exports = User;

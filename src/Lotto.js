const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
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
  purchaseLottos() {
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

  
}

module.exports = Lotto;

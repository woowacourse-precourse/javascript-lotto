const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicate(numbers) {
    if ([...new Set(numbers)] !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
}

class LottoPurchase {

  constructor(amount) {
    this.amount = amount
  }

  divide(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 입력한 금액이 1,000원 단위여야 합니다. ")
    }
  }
}

module.exports = Lotto;

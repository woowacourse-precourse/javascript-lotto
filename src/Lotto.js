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

  static checkMoney(money) {
    const IS_TYPE_NUMBER = !Number.isNaN(money);
    const IS_MULTIPLE_THOUSAND = Number(money) % 1000 === 0;
    const IS_VALID = IS_TYPE_NUMBER && IS_MULTIPLE_THOUSAND;

    if (!IS_VALID) {
      throw new Error("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
    }
  }
}

module.exports = Lotto;

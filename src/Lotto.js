const { Random } = require("@woowacourse/mission-utils");

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
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error("[ERROR] 중복된 숫자가 없어야 합니다.");
    }
  }

  makeSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

}

module.exports = Lotto;
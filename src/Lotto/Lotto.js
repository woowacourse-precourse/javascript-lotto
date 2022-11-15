const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  constructor() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 46, 6).sort(
      (a, b) => a - b
    );
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkNumbersLength(numbers);
  checkNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;

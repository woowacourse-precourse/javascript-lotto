const MissionUtils = require("@woowacourse/mission-utils");

const { Random, Console } = MissionUtils;

class Lotto {
  #numbers;
  /**
   * @param {array} numbers: 6자리의 숫자 배열
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  setNumbers() {
    this.#numbers = pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = Lotto;

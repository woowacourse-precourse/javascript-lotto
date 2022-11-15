const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(n) {
    this.#numbers = this.generateLotto(n);
    this.validate(this.#numbers);
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복 숫자가 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
  generateLotto(n) {
    const LOTTO_START_NUM = 1;
    const LOTTO_END_NUM = 45;
    const LOTTO_NUM_COUNT = n;

    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_START_NUM,
      LOTTO_END_NUM,
      LOTTO_NUM_COUNT
    );
  }
}

module.exports = Lotto;

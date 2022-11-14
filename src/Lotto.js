const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    const lottoSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (lottoSet.length !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 되면 안됩니다.");
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

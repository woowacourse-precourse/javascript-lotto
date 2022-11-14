const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) { // 당첨된 로또 번호 6자리 숫자
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;

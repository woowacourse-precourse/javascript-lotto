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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1-45 사이의 숫자가 아닙니다.");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

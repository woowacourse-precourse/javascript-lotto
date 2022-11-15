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
    if (!numbers.every((e) => e >= 1 && e <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자만 가능합니다.");
    }
    if (!numbers.every((e) => Number.isInteger(e))) {
      throw new Error("[ERROR] 로또 번호는 정수만 가능합니다.");
    }
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

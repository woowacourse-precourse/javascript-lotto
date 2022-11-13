const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.isNumber(numbers);
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  isNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자만 입력해야 합니다.");
      }
      if (numbers[i] % 1 > 0) {
        throw new Error("[ERROR] 자연수만 입력해야 합니다.");
      }
    }
  }
}

module.exports = Lotto;

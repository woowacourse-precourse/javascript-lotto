const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const deduplicationNumbers = new Set(numbers);
    if (deduplicationNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.rangeValidate(numbers.toString());
  }

  rangeValidate(numbers) {
    if(!numbers.match(/[1-45]{6}/)){
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.");
    }
  }
}

module.exports = Lotto;

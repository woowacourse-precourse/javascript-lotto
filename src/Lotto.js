const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    this.sixValidate(numbers);
    this.typeValidate(numbers);
    this.uniqueValidate(numbers);
    this.rangeValidate(numbers);
  }

  rangeValidate(numbers) {
    numbers.map((number) => {
      if (Number(number) > 45 || Number(number) === 0) {
        throw new Error("[ERROR] 당첨 번호가 1~45가 아닙니다.");
      }
    });
  }

  uniqueValidate(numbers) {
    const lottoSet = new Set(numbers);
    const uniqueArray = [...lottoSet];
    if (uniqueArray.length !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 되면 안됩니다.");
    }
  }

  typeValidate(numbers) {
    numbers.map((data) => {
      if (isNaN(data)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });
  }

  sixValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;

const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    this.checkNumbersLength(numbers);
    this.checkNumbersType(numbers);
    this.checkDuplicateNumber(numbers);
  }

  checkNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkNumbersType(numbers) {
    numbers.map((number) => {
      if (isNaN(number))
        throw new Error("[ERROR] 로또는 모두 숫자여야 합니다.");
    });
  }

  checkDuplicateNumber(numbers) {
    if (numbers.length !== new Set(numbers).size)
      throw new Error("[ERROR] 중복이 있습니다.");
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;

const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateSizeIsSix(numbers);
    this.validateIsDuplicated(numbers);
  }
  // TODO: 추가 기능 구현
  validateIsDuplicated(numbers) {
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      Console.close();
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.");
    }
  }

  validateSizeIsSix(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;

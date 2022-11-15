const { Random, Console } = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      if (numbers.some((number) => number > 45)) throw new Error("[ERROR] 숫자는 45보다 작아야 합니다.");
      if (numbers.some((number) => number < 1)) throw new Error("[ERROR] 숫자는 1보다 커야 합니다.");
      if ([...new Set(numbers)].length !== numbers.length) throw new Error("[ERROR] 중복된 값이 존재합니다.");
    }
  }
}

module.exports = Lotto;

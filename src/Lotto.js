const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length != 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    // check for repeated numbers
    if (new Set(numbers).size != 6) {
      throw new Error("[ERROR] 중복 번호가 없어야 합니다.");
    }

    for (let number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1에서 45 숫자여야 합니다.");
      }
    }
  }

  print() {
    MissionUtils.Console.print(`${this.#numbers}`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

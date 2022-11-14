const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }

  printLotto() {
    let str = "[";
    for (let i = 0; i < 5; i++) {
      str += this.#numbers[i] + ", ";
    }
    str += this.#numbers[5] + "]";
    MissionUtils.Console.print(str);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let i; i < 6; i++) {
      if (!parseInt(numbers[i])) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
      if (parseInt(numbers[i]) < 1 || parseInt(numbers[i] > 45)) {
        throw new Error("[ERROR] 로또 번호는 1에서 45사이의 정수여야 합니다.");
      }
      if (!Number.isInteger(numbers[i])) {
        throw new Error("[ERROR] 로또 번호는 1에서 45사이의 정수여야 합니다.");
      }
    }
    const setNumber = new Set(numbers);
    if (setNumber.size != numbers.length) {
      throw new Error("[ERROR] 번호가 중복됩니다!");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

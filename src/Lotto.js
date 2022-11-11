const { Console } = require("@woowacourse/mission-utils");

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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복을 포함할 수 없습니다.");
    }

    if (numbers.join("").replace(/[0-9]/g, "").length > 0) {
      throw new Error("[ERROR] 로또 번호는 숫자만 사용할 수 있습니다.");
    }
  }

  get objectName() {
    return "Lotto";
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getNumbers() {
    return this.#numbers.map((number) => String(number));
  }
}

module.exports = Lotto;

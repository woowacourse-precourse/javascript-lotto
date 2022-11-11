const { Console } = require("@woowacourse/mission-utils");
const { removeOverlap } = require("./utils/removeOverlap");

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

    if (removeOverlap(numbers).length !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호가 존재합니다.");
    }
  }

  // TODO: 추가 기능 구현

  get getLotto() {
    Console.print(this.#numbers);
    return this.#numbers;
  }
}

module.exports = Lotto;

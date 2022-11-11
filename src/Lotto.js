const { Random, Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers !== undefined) {
      this.validate(numbers);
      this.#numbers = numbers;
    }
    if (numbers === undefined) {
      this.#numbers = [];
      this.createLottoNum();
    }
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45)
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자 입니다.");
    });
  }

  createLottoNum() {
    while (this.#numbers.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!this.#numbers.includes(number)) this.#numbers.push(number);
    }
    this.#numbers.sort((a, b) => a - b);
  }

  printNumbers() {
    Console.print(this.#numbers);
  }
}

module.exports = Lotto;

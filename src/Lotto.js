const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sortLotto(numbers);
    this.printLotto(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1이상 45이하의 번호만 가능합니다.");
    }
  }

  sortLotto(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    return numbers;
  }

  printLotto(numbers) {
    return Console.print(`[${numbers.toString().replace(/\,/g, ", ")}]`);
  }
}

module.exports = Lotto;

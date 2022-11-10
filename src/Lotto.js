const MissionUtils = require("@woowacourse/mission-utils");

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
  }

  sortLotto(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    return numbers;
  }

  printLotto(numbers) {
    return MissionUtils.Console.print(numbers);
  }
}

module.exports = Lotto;

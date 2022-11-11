const MissionUtils = require("@woowacourse/mission-utils");

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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45)
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자 입니다.");
    });
  }

  printNumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
}

new Lotto([1, 2, 3, 4, 5, 6]).printNumbers();
new Lotto([6, 12, 23, 34, 40, 45]).printNumbers();

module.exports = Lotto;

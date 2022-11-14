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
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  printLottoNumbers() {
    MissionUtils.Console.print(
      `[${this.#numbers[0]}, ${this.#numbers[1]}, ${this.#numbers[2]}, ${
        this.#numbers[3]
      }, ${this.#numbers[4]}, ${this.#numbers[5]}]`
    );
  }
}

module.exports = Lotto;

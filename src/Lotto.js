const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    numbers.sort(function (previousNumber, currentNumber) {
      return previousNumber - currentNumber;
    });
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    let numbersSet = new Set(numbers);
    numbersSet = [...numbersSet];
    if (numbersSet.length !== numbers.length) {
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않은 1부터 45 사이의 숫자여야 합니다."
      );
    }
    for (const number of numbers) {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
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

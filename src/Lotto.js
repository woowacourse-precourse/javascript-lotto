const MissionUtils = require("@woowacourse/mission-utils");

const mConsole = MissionUtils.Console;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isNumbersRange(numbers))
      throw new Error("[ERROR] 로또 번호의 범위는 1~45이어야 합니다.");

    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if ([...new Set(numbers)].length !== 6)
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다."
      );

    if (!this.isNumbersType(numbers))
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
  }

  isNumbersRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  isNumbersType(numbers) {
    return numbers.every((number) => !isNaN(number));
  }

  printNumbers() {
    this.#numbers.sort((a, b) => (a > b ? 1 : -1));

    mConsole.print(`[${this.#numbers.join(", ")}]`);
  }
}

module.exports = Lotto;

const MissionUtils = require("@woowacourse/mission-utils");
const { RULE } = require("./constants/rule");

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

    if (numbers.length !== RULE.LOTTO_NUMS)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if ([...new Set(numbers)].length !== RULE.LOTTO_NUMS)
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다."
      );

    if (!this.isNumbersType(numbers))
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
  }

  isNumbersRange(numbers) {
    return numbers.every(
      (number) =>
        number >= RULE.MIN_LOTTO_NUMBER && number <= RULE.MAX_LOTTO_NUMBER
    );
  }

  isNumbersType(numbers) {
    return numbers.every((number) => !isNaN(number));
  }

  printNumbers() {
    this.#numbers.sort((a, b) => (a > b ? 1 : -1));

    mConsole.print(`[${this.#numbers.join(", ")}]`);
  }

  getResult(winningNumberList, bonusNumber) {
    let compareCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumberList.includes(number)) compareCount++;
    });

    if (compareCount === 6) return 1;
    if (compareCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (compareCount === 5) return 3;
    if (compareCount === 4) return 4;
    if (compareCount === 3) return 5;
    if (compareCount < 3) return null;
  }
}

module.exports = Lotto;

const { Console } = require("@woowacourse/mission-utils");
const checkValidation = require("./errors/checkValidation");
class Lotto {
  #numbers;

  constructor(numbers) {
    checkValidation.checkLottoList(numbers);
    this.#numbers = numbers;
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
  getResult(winningNumberList, bonusNumber) {
    const winningCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumberList.includes(number)) winningCount += 1;
    });

    if (winningCount < 3) return null;
    if (winningCount === 6) return 1;
    if (winningCount === 5 && this.#numbers.includes(bonusNumber)) return 2;

    return 8 - winningCount;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

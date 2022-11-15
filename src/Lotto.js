const { Console } = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Validator.isArrayOfInteger(numbers)) {
      throw new Error("[ERROR] 로또 번호는 숫자로 이루어져야 합니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호 숫자는 중복되지 않아야 합니다.");
    }

    if (!Validator.isAscending(numbers)) {
      throw new Error("[ERROR] 로또 번호 숫자는 오름차순이어야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    const joinedNumbers = this.#numbers.join(", ");
    Console.print(`[${joinedNumbers}]\n`);
  }

  getComparisonResult(winnerNumber, bonusNumber) {
    const result = {
      winnerCount: 0,
      bonusFlag: false,
    };

    for (let i = 0; i < this.#numbers.length; i++) {
      if (this.#numbers.includes(winnerNumber[i])) result.winnerCount++;
      if (this.#numbers.includes(bonusNumber)) result.bonusFlag = true;
    }

    return result;
  }
}

module.exports = Lotto;

const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Validation = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  displayNumbers() {
    Console.print(
      "[" +
        this.#numbers[0] +
        ", " +
        this.#numbers[1] +
        ", " +
        this.#numbers[2] +
        ", " +
        this.#numbers[3] +
        ", " +
        this.#numbers[4] +
        ", " +
        this.#numbers[5] +
        "]"
    );
  }

  compareNumbers(winningNumber, bonusNumber) {
    let winningPoint = 0;

    this.#numbers.forEach((number) => {
      if (winningNumber.includes(number)) {
        winningPoint = winningPoint + 1;
      }
    });

    if (winningPoint === 5) {
      if (this.checkBonusNumber(this.#numbers, bonusNumber) === true) {
        return 7;
      }
    }
    return winningPoint;
  }

  checkBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      return true;
    }
    return false;
  }

  validate(numbers) {
    const validation = new Validation();

    validation.length(numbers);
    validation.isDuplicate(numbers);
  }
}

module.exports = Lotto;

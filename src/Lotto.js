const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.printNumbers();
  }

  printNumbers() {
    let result = "[";
    for (let index = 0; index < this.#numbers.length; index++) {
      result += this.#numbers[index];
      if (index !== this.#numbers.length - 1) {
        result += ", ";
      }
    }
    result += "]";
    MissionUtils.Console.print(result);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.isValidNumber(numbers);
    const temp = new Set(numbers);

    if (temp.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되어서는 안됩니다.");
    }
  }

  isValidNumber(numbers) {
    const regExp = /\D/g;

    for (let index = 0; index < numbers.length; index++) {
      if (regExp.test(numbers[index])) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }
      if (numbers[index] < 1 || numbers[index] > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
      }
    }
  }

  isWinLottery(winningNumbers, bonusNumber) {
    let winningNumberCount = 0;
    for (let index = 0; index < winningNumbers.length; index++) {
      if (this.#numbers.includes(winningNumbers[index])) {
        winningNumberCount++;
      }
    }
    if (winningNumberCount === 5) {
      return this.checkBonusNumber(bonusNumber);
    }
    return this.finalResult(winningNumberCount);
  }

  checkBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      return 2;
    }
    return 3;
  }

  finalResult(winningNumberCount) {
    if (winningNumberCount === 3) {
      return 5;
    }
    if (winningNumberCount === 4) {
      return 4;
    }
    if (winningNumberCount === 6) {
      return 1;
    }
    return 0;
  }
}

module.exports = Lotto;

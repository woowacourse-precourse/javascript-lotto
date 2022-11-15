const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_STATUS, PRIZE, MESSAGES, ERROR_MESSAGES } = require("./enum");

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
    if (numbers.length !== LOTTO_STATUS.LENGTH) {
      throw new Error(ERROR_MESSAGES.LENGTH_ERROR);
    }
    this.isValidNumber(numbers);
    const temp = new Set(numbers);

    if (temp.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.OVERLAP_ERROR);
    }
  }

  isValidNumber(numbers) {
    const regExp = /\D/g;

    for (let index = 0; index < numbers.length; index++) {
      if (regExp.test(numbers[index])) {
        throw new Error(ERROR_MESSAGES.INPUT_ERROR);
      }
      if (
        numbers[index] < LOTTO_STATUS.MIN ||
        numbers[index] > LOTTO_STATUS.MAX
      ) {
        throw new Error(ERROR_MESSAGES.RANGE_ERROR);
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

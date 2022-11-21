const { Console } = require('@woowacourse/mission-utils');

const ERROR_MESSAGE = {
  NOT_6_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_A_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45사이여야 합니다.',
  DUPLICATED: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
    this.printNumbers();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_6_NUMBERS);
    } else if (numbers.some((number) => Number.isNaN(number))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    } else if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    } else if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getRank(winningNumbers, bonusNumber) {
    const winningCount = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    const matchBonus = this.#numbers.includes(bonusNumber);

    switch (winningCount) {
      case 6:
        return 1;
      case 5:
        return matchBonus ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 6;
    }
  }
}

module.exports = Lotto;

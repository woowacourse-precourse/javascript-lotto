const { Console } = require('@woowacourse/mission-utils');

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
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getRank(winningNumbers, bonusNumber) {
    const winningCount = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    const matchBonus = this.#numbers.includes(bonusNumber);

    if (winningCount === 6) {
      return 1;
    }
    if (winningCount === 5 && matchBonus) {
      return 2;
    }
    if (winningCount === 5) {
      return 3;
    }
    if (winningCount === 4) {
      return 4;
    }
    if (winningCount === 3) {
      return 5;
    }
    return 6;
  }
}

module.exports = Lotto;

const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  get numbers() {
    return this.#numbers;
  }

  print() {
    Console.print('[' + this.numbers.join(', ') + ']');
  }

  hasBonusNumber(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }

  countDuplicateNumber(winningNumber) {
    return this.numbers
      .filter(number => winningNumber.includes(number))
      .length;
  }
  
  getRank(winningNumber, bonusNumber) {
    const duplicateCount = this.countDuplicateNumber(winningNumber);
    if (duplicateCount === 6) return 'first';
    if (this.hasBonusNumber(bonusNumber) && duplicateCount === 5) return 'second';
    if (duplicateCount === 5) return 'third';
    if (duplicateCount === 4) return 'fourth';
    if (duplicateCount === 3) return 'fifth';
    return 'none';
  }
}

module.exports = Lotto;

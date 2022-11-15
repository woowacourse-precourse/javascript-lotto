const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (this.#hasNaN(numbers)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    if (this.#outOfRange(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야만 합니다.');
    }
  }
  #hasNaN(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
      if (typeof numbers[i] !== 'number') return true;
    }
    return false;
  }
  #outOfRange(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i] < 1 || numbers[i] > 45) return true;
    }
  }

  printNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }

  grade(winNumbers, bonusNmber) {
    let grade = 7;
    for (let i = 0; i < this.#numbers.length; i++) {
      if (winNumbers.includes(this.#numbers[i])) --grade;
    }
    if ((grade === 2 && this.#numbers.includes(bonusNmber)) || grade === 1)
      --grade;
    return grade;
  }
}

module.exports = Lotto;

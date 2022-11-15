const { RANGE } = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.isDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!this.isNumInRange(numbers)) {
      throw new Error("[ERROR] 로또 번호가 1-45 사이 숫자가 아닙니다.");
    }
  }

  isNumInRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < RANGE.MIN || numbers[i] > RANGE.MAX) return false;
    }
    return true;
  }

  isDuplicate(numbers) {
    const numbersSet = new Set(numbers);
    if (numbers.length !== numbersSet.size) {
      return true;
    }
    return false;
  }
}

module.exports = Lotto;

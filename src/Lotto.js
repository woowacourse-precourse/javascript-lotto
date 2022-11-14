const { RANGE } = require("./Constant");

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
    if (!this.isNumInRange(numbers)) {
      throw new Error("[ERROR] 로또 번호가 1-45 사이 숫자가 아닙니다.");
    }
  }

  isNumInRange(randomNumArr) {
    for (let i = 0; i < randomNumArr.length; i++) {
      if (randomNumArr[i] < RANGE.MIN && randomNumArr[i] > RANGE.MAX)
        return false;
    }
    return true;
  }
}

module.exports = Lotto;

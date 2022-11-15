const STATIC = require("./Static");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.validateIsNum(numbers);
    this.validateIsRange(numbers);
    this.validateIsDuplicate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateIsNum = (numbers) => {
    numbers.map((e) => {
      if (isNaN(parseInt(e)) || !Number.isInteger(parseFloat(e))) {
        throw new Error(STATIC.MESSAGE.ERR_INPUT);
      }
    });
  };

  validateIsRange = (numbers) => {
    numbers.map((e) => {
      if (e >= 45 || e < 1) {
        throw new Error(STATIC.MESSAGE.ERR_INPUT);
      }
    });
  };
  // TODO: 추가 기능 구현

  validateIsDuplicate = (numbers) => {
    numbers.map((number, idx) => {
      if (!this.duplicateCheck([...numbers], idx, number)) {
        throw new Error(STATIC.MESSAGE.ERR_DUPLICATE);
      }
    });
  };

  duplicateCheck = (answer, idx, val) => {
    answer.splice(idx, 1);
    return answer.every((e) => e != val);
  };

  getNumber = () => {
    return this.#numbers;
  };
}

module.exports = Lotto;

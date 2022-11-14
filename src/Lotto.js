const Message = require("./Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlap(numbers);
    this.range(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.COUNT_ERROR);
    }
  }

  // TODO: 추가 기능 구현
  overlap(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error(Message.OVERLAP_ERROR);
    }
  }

  range(numbers) {
    numbers.map(n => {
      if (n < 1 || n > 45) {
        throw new Error(Message.RANGE_ERROR);
      }
    })
  }
}

module.exports = Lotto;

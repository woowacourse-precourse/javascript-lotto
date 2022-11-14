const Message = require("./Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.COUNT_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(Message.NUMBER_ERROR);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

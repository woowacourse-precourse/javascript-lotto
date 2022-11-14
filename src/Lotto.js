const Message = require("./Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlay(numbers);
    this.rangeValidation(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  overlay(numbers) {
    const set = new Set(numbers);
    numbers = [...set];
    
    if (numbers.length !== 6) {
      throw new Error(`${Message.ERROR_MESSAGE.OVERLAP}`);
    }
  }

  rangeValidation(numbers) {
    numbers.forEach(element => {
      const num = parseInt(element);
      if ( num < 1 || num > 45) {
        throw new Error(`${Message.ERROR_MESSAGE.RANGE}`);
      }
    });
  }

  

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

const { number } = require("prop-types");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    this.isLengthSix(numbers);
    this.isNumber(numbers);
    this.isInAlready(numbers);
    this.isInRange(numbers);
  }
  isLengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] : 로또 번호는 6개여야 합니다.");
    }
    return true;
  }
  isNumber(numbers) {
    numbers.map((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] : 숫자만 입력 가능합니다.");
      }
    });
    return true;
  }
  isInAlready(numbers) {
    const numberList = [];
    numbers.map((number) => {
      if (numberList.includes(number)) {
        throw new Error("[ERROR] : 중복된 숫자가 있습니다.");
      }
      numberList.push(number);
    });
    return true;
  }
  isInRange(numbers) {
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] : 1~45 사이의 숫자만 입력 가능합니다.");
      }
    });
    return true;
  }
}
module.exports = Lotto;

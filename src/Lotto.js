const Checker = require("./Checker.js");
const Generator = require("./Generator.js");

class Lotto {
  #numbers;

  constructor(numbers, ticket) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.generateLottoResult(numbers, ticket);
  }

  validate(numbers) {
    const checker = new Checker();

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    checker.isOverlapping(numbers);
    checker.isRightRangeNumber(numbers);
  }

  // TODO: 추가 기능 구현

  generateLottoResult(lottoNumber, ticke) {
    const generator = new Generator();
    return generator.generateLottoResult(lottoNumber, ticke);
  }
}

module.exports = Lotto;

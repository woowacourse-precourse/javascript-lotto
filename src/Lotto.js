const validation = require('./validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    console.log(Array.isArray(numbers));
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validation.isLottoNumber(numbers);
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

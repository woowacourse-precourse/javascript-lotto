const { ERR_LOTTO_CNT } = require('./Constants');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_LOTTO_CNT);
    }
  }
  toString() {
    console.log(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

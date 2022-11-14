const { ERR_LOTTO_CNT } = require('./Constants');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbers(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_LOTTO_CNT);
    }
  }
  // TODO: 추가 기능 구현

  sortNumbers(numbers) {
    //로또 번호 정렬하여 저장
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }
  toString() {
    console.log(this.#numbers);
  }
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

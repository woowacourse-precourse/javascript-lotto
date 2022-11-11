class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  order_lotto() {
    let NUMBERS = this.#numbers;
    NUMBERS = NUMBERS.sort((x, y) => x - y);
    return NUMBERS;
  }
}

module.exports = Lotto;

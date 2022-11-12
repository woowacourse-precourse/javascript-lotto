class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // eslint-disable-next-line class-methods-use-this
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

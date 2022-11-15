class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

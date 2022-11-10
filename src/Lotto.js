class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throwError(messege)("로또 번호는 6개여야 합니다.");
    }
  }

  throwError(messege) {
    throw new Error(`[ERROR] ${messege}`);
  }
}

module.exports = Lotto;

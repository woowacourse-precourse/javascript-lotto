class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
  }

  checkLength(numbers) {
    const LOTTO_LENGTH = 6;
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;

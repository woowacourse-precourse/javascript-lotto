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

    if (!numbers.includes(',')) {
      throw new Error('[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.');
    }
  }
}

module.exports = Lotto;

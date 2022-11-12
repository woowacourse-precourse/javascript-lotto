class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_1);
    }

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== 6) {
      throw new Error(ERROR.LOTTO_2);
    }
  }
}

module.exports = Lotto;

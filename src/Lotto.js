class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateNumberLength(numbers);
    this.validateUnique(numbers);
    numbers.forEach((number) => this.validateNumberRange(1, 45, number));
  }

  validateNumberLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복없이 6개여야 합니다.');
    }
  }

  validateNumberRange(start, end, number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하 입니다.');
    }

    if (number < start || number > end) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하 입니다.');
    }
  }
}

module.exports = Lotto;

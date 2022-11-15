class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers)
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateDuplicated(numbers);
    this.validateNumber(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateDuplicated(numbers) {
    let numberSet = new Set(numbers)
    if (numberSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }

  validateNumber(numbers) {
    for (const number of numbers) {
      this.validateIsInteger(number)
      this.validateRangeOfNumber(number)
    }
  }

  validateRangeOfNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 수여야 합니다.");
    }
  }

  validateIsInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 로또 번호는 자연수여야 합니다.");
    }
  }
}

module.exports = Lotto;

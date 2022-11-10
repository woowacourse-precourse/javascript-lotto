class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateDuplication(numbers);
    this.validateType(numbers);
    this.validateRange(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateDuplication(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 수가 존재하면 안됩니다.');
    }
  }

  validateType(numbers) {
    numbers.forEach((number) => {
      if (!Number(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    });
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

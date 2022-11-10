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

    this.#validateOverlap(numbers).#validateLottoRange(numbers);
  }

  // TODO: 추가 기능 구현
  #validateOverlap(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복이 되어서는 안됩니다.');
    }

    return this;
  }

  #isLottoRange(number) {
    return 1 <= number && number <= 45;
  }

  #validateLottoRange(numbers) {
    if (numbers.filter(this.#isLottoRange).length !== 6) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45사이 숫자여야 합니다.');
    }

    return this;
  }
}

module.exports = Lotto;

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
    if (this.#hasNaN(numbers)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  #hasNaN(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
      if (typeof numbers[i] !== 'number') return true;
    }
    return false;
  }
}

module.exports = Lotto;

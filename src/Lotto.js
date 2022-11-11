class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplicate(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  checkDuplicate(numbers) {
    const set = new Set();
    numbers.forEach((number) => {
      set.add(number);
    });
    if (set.size != 6) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다. ');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

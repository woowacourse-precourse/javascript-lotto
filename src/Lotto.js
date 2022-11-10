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

    if (numbers.some((number) => /[^0-9]/.test(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }

    if (
      numbers.some(
        (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
      )
    ) {
      throw new Error('[ERROR] 로또 번호는 중복을 허용하지 않습니다.');
    }

    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error('[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

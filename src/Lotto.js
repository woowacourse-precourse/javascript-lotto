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
    const isOutOfRange = numbers.some((number) => number < 1 || number > 45);
    if (isOutOfRange) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error('[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

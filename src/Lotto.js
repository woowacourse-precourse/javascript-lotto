class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    const numSet = new Set(numbers);
    if (numSet.size !== 6) throw new Error('[ERROR] 중복된 번호가 없어야 합니다.');

    numbers.forEach((num) => {
      if (!Number.isInteger(num)) throw new Error('[ERROR] 정수를 입력해야 합니다.');
      if (num < 1 || num > 45) throw new Error('[ERROR] 1~45 사이 숫자여야 합니다.');
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

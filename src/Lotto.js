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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }

    numbers.forEach((item) => {
      if (!/^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/.test(item)) {
        throw new Error('[ERROR] 1-45 범위의 숫자를 입력해주세요.');
      }
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

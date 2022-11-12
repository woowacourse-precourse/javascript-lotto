class Lotto {
  #numbers;

  constructor(numbers) {
    this.isSix(numbers);
    this.#numbers = numbers;
  }

  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isNumber(numbers) {
    const regex = /^[0-9]+$/;
    if (!regex.test(numbers)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

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
  }

  isNumber(numbers) {
    const regex = /^[0-9]+$/;
    if (!regex.test(numbers)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  }

  isUnique(numbers) {
    const numbersArr = numbers.split(',');
    if (new Set(numbersArr).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

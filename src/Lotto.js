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

  duplicate() {
    const NOT_DUPLICATE = new Set(this.#numbers);
    if (NOT_DUPLICATE.size !== 6) {
      throw new Error('[ERROR] 중복되지 않는 숫자를 입력하여야 합니다.');
    }
  }

  checkNumber() {
    const NUMBER = this.#numbers;
    for (let index = 0; index < NUMBER.length; index++) {
      if (Number.isNaN(NUMBER[index]) || NUMBER[index] === 0) {
        throw new Error('[ERROR] 숫자를 입력하셔야 합니다.');
      }
      if (NUMBER[index] < 1 || NUMBER[index] > 45) {
        throw new Error('[ERROR] 1 ~ 45 사이의 숫자를 입력 하셔야 합니다.');
      }
    }
  }
}

module.exports = Lotto;

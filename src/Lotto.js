class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicate(numbers);
    this.checkNumber(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  duplicate(numbers) {
    const NOT_DUPLICATE = new Set(numbers);
    if (NOT_DUPLICATE.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자를 입력하여야 합니다.');
    }
  }

  checkNumber(numbers) {
    const NUMBER = numbers;
    if (NUMBER.includes(NaN)) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력 하셔야 합니다.');
    }
    for (let index = 0; index < NUMBER.length; index += 1) {
      if (NUMBER[index] < 1 || NUMBER[index] > 45) {
        throw new Error('[ERROR] 로또 번호는 공백 없이 1 ~ 45 사이의 숫자를 입력 하셔야 합니다.');
      }
    }
  }
}

module.exports = Lotto;

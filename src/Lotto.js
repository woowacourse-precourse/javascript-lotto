class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
  }

  validateRange(numbers) {
    for (let index = 0; index < 6; index++) {
      console.log(Number(numbers[index]));
      if (!(1 <= Number(numbers[index]) && Number(numbers[index]) <= 45)) {
        throw new Error("[ERROR] 1 ~ 45 범위에 있어야 합니다.");
      }
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLength(numbers);
    this.validateNoDuplicates(numbers);
    this.validateNumBetween1To45(numbers);
    this.validateInteger(numbers);
    this.#numbers = numbers;
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateNoDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateNumBetween1To45(numbers) {
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  validateInteger(numbers) {
    numbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    });
  }



  // TODO: 추가 기능 구현
}

module.exports = Lotto;

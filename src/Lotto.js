class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLength(numbers);
    this.validateNoDuplicates(numbers);
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


  // TODO: 추가 기능 구현
}

module.exports = Lotto;

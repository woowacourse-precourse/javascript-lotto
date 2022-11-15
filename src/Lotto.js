class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateCount(numbers);
    this.validateRange(numbers);
    this.validateOverlap(numbers);
    this.#numbers = numbers;
  }

  // 개수 확인
  validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // 범위 확인
  validateRange(numbers) {
    for(const num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  // 중복 확인
  validateOverlap(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안 됩니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

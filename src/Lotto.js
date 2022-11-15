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
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numbers[i + 1]) {
        throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.")
      }
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers
  }

  getNumbersToString() {
    return `[${this.#numbers.join(', ')}]`
  }

};

module.exports = Lotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const set = new Set(numbers);
    if (set.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6자리 숫자여야 합니다.")
    }
  }
}

module.exports = Lotto;

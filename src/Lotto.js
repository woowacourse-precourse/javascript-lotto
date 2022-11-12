class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getLotto() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;

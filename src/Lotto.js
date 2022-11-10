class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sort();
  }

  validate(numbers) {
    if (!/\d/g.test(numbers.join(''))) throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.")
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }

  sort() {
    this.#numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

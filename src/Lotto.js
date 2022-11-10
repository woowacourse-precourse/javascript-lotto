class Lotto {
  #numbers;

  #count;

  #isBonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sort();

    this.#count = 0;
    this.#isBonus = false;
  }

  validate(numbers) {
    if (!/\d/g.test(numbers.join(''))) throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  sort() {
    this.#numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  get count() {
    return this.#count;
  }

  increaseCount() {
    this.#count += 1;
  }

  setIsBonus() {
    this.#isBonus = true;
  }
}

module.exports = Lotto;

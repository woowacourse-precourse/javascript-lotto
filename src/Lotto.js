class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (numbers.filter((number) => Number.isNaN(number)).length > 0) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 고유해야 합니다.');
    }
  }

  getQrCode() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

module.exports = Lotto;

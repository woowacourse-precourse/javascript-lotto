class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  validateLottoNumbers(numbers) {
    this.validateLengthIsSix(numbers);
  }

  validateLengthIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

module.exports = Lotto;

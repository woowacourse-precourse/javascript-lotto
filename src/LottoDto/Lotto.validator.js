class LottoValidator {
  static checkLotto(numbers) {
    this.#checkLottoLength(numbers);
    this.#checkLottoNumbers(numbers);
  }

  static #checkLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[Error] 숫자가 6개 이어야 합니다.');
    }
  }

  static #checkLottoNumbers(numbers) {
    numbers.forEach((number) => {
      this.#checkLottoNumber(number);
    });
  }

  static #checkLottoNumber(number) {
    if (number < '1' || number > '45') {
      throw new Error('[Error] 숫자의 범위는 1~45이어야 합니다.');
    }
  }
}

module.exports = LottoValidator;
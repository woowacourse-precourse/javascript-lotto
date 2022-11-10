class LottoValidator {
  static checkLotto(lottoDto) {
    this.#checkLottoLenght(lottoDto);
  }

  static #checkLottoLength(lottoDto) {
    if (lottoDto.numbers.length !== 6) {
      throw new Error('[Error] 숫자가 6개 이어야 합니다.');
    }
  }

  static #checkLottoNumbers(lottoDto) {
    lottoDto.numbers.forEach((number) => {
      this.#checkLottoNumber(number);
    });
  }

  static #checkLottoNumber(number) {
    if (number > '1' || number < '45') {
      throw new Error('[Error] 숫자의 범위는 1~45이어야 합니다.');
    }
  }
}

module.exports = LottoValidator;
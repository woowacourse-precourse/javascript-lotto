const { ERROR } = require('../Resource');

class LottoValidator {
  static checkLotto(numbers) {
    this.#checkLottoLength(numbers);
    this.#checkLottoNumbers(numbers);
  }

  static checkMoney(number) {
    if (+number / 1000 == 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }

  static splitLottoNumbers (lottoNumbersString) {
    const lottoNumbers = lottoNumbersString.split(',');
    this.LottoValidator(lottoNumbers);
    return lottoNumbers;
  }

  static #checkLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  static #checkLottoNumbers(numbers) {
    numbers.forEach((number) => {
      this.#checkLottoNumber(number);
    });
  }

  static #checkLottoNumber(number) {
    if (number < '1' || number > '45') {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  }
}

module.exports = LottoValidator;

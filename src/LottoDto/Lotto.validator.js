const { ERROR, LOTTO } = require('../Resource');

class LottoValidator {
  static checkLotto(numbers) {
    this.#checkLottoLength(numbers);
    this.#checkLottoNumbers(numbers);
    this.#checkLottoOverlap(numbers);
  }

  static checkMoney(number) {
    if (+number / LOTTO.LOTTO_COST == 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }

  static splitLottoNumbers(lottoNumbersString) {
    const lottoNumbers = lottoNumbersString.split(',');
    this.LottoValidator(lottoNumbers);
    return lottoNumbers;
  }

  static #checkLottoOverlap(numbers) {
    if (new Set(numbers).size !== LOTTO.LOTTO_SIZE) {
      throw new Error(ERROR.LOTTO_OVERLAP);
    }
  }

  static #checkLottoLength(numbers) {
    if (numbers.length !== LOTTO.LOTTO_SIZE) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  static #checkLottoNumbers(numbers) {
    numbers.forEach((number) => {
      this.#checkLottoNumber(number);
    });
  }

  static #checkLottoNumber(number) {
    if (
      number < `${LOTTO.LOTTO_SMALL_VALUE}` ||
      number > `${LOTTO.LOTTO_BIG_VALUE}`
    ) {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  }
}

module.exports = LottoValidator;

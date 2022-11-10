const LOTTO_NUMBERS_COUNT = 6;

class Validator {
  constructor(lottoNumbersCount = LOTTO_NUMBERS_COUNT) {
    this.lottoNumbersCount = lottoNumbersCount;
  }

  isValidLotto(lottoNumbers) {
    if (lottoNumbers.length !== this.lottoNumbersCount) {
      throw new Error(`[ERROR] 로또 번호는 ${this.lottoNumbersCount}개여야 합니다.`);
    }
  }
}

module.exports = Validator;

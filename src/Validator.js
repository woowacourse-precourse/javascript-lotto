const LOTTO_NUMBERS_COUNT = 6;

// TODO: 6, 1, 45 같은 상수 어떻게 처리할것인지?
// TODO: [ERROR] 부분도 상수 처리
class Validator {
  constructor(lottoNumbersCount = LOTTO_NUMBERS_COUNT) {
    this.lottoNumbersCount = lottoNumbersCount;
  }

  isValidLotto(lottoNumbers) {
    if (lottoNumbers.length !== this.lottoNumbersCount) {
      throw new Error(`[ERROR] 로또 번호는 ${this.lottoNumbersCount}개여야 합니다.`);
    }
  }

  static isValidInput(input) {
    // 빈입력인지
    if (!input.length) {
      throw new Error('[ERROR] 아무것도 입력하지 않았습니다.');
    }

    if (input !== input.trim()) {
      throw new Error('[ERROR] 입력에 공백이 포함되어 있습니다.');
    }

    return true;
  }
}

module.exports = Validator;

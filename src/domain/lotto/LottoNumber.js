const LottoNumberRangeException = require('../../exception/lotto/LottoNumberRangeException');
const NotNumberException = require('../../exception/NotNumberException');
const { checkNotNumber } = require('../../util/validate');

class LottoNumber {
  static RANGE = Object.freeze({
    min: 1,
    max: 45,
  });

  static validate(value) {
    if (checkNotNumber(value)) {
      throw new NotNumberException(value);
    }

    if (value < LottoNumber.RANGE.min) {
      throw new LottoNumberRangeException(LottoNumber.RANGE);
    }

    if (value > LottoNumber.RANGE.max) {
      throw new LottoNumberRangeException(LottoNumber.RANGE);
    }
  }
}

module.exports = LottoNumber;

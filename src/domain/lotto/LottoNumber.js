const LottoNumberRangeException = require('../../exception/lotto/LottoNumberRangeException');
const Validation = require('../../util/Validation');

class LottoNumber {
  static RANGE = Object.freeze({
    min: 1,
    max: 45,
  });

  static validate(value) {
    Validation.checkNotNumber(value);
    LottoNumber.validateNumberRange(value);
  }

  static validateNumberRange(value) {
    Validation.validate({
      condition: value < LottoNumber.RANGE.min || value > LottoNumber.RANGE.max,
      exception: new LottoNumberRangeException(LottoNumber.RANGE),
    });
  }
}

module.exports = LottoNumber;

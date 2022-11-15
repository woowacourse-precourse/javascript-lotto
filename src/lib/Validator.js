const { LOTTO, ERROR, REGEX } = require('../constant/Constant');

class Validator {
  static errorIfLottosInvalidFormat(lottos) {
    if (lottos.length !== LOTTO.COUNT) {
      throw Error(ERROR.LOTTO_COUNT_INCORRECT);
    }

    if (new Set(lottos).size !== LOTTO.COUNT) {
      throw Error(ERROR.LOTTO_DUPLICATED);
    }

    lottos.forEach((currentNumber) => {
      if (!REGEX.LOTTO_NUMBER_FORMAT.test(currentNumber)) {
        throw Error(ERROR.LOTTO_INVALID_VALUE);
      }
    });
  }

  static errorIfBonusLottoInvalidFormat(bonusNumber) {
    if (!REGEX.LOTTO_NUMBER_FORMAT.test(bonusNumber)) {
      throw Error(ERROR.LOTTO_INVALID_VALUE);
    }
  }
}

module.exports = Validator;

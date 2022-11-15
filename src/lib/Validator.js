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

  static errorIfMoneyInvalidFormat(money) {
    if (!REGEX.MONEY_FORMAT.test(money)) {
      throw Error(ERROR.MONEY_INVALID_VALUE);
    }
  }

  static errorIfRegularLottoAndBonusNumberDuplicated(lottos, bonusNumber) {
    if (lottos.includes(bonusNumber)) {
      throw Error(ERROR.REGULAR_LOTTO_AND_BONUS_NUMBER_DUPLICATED);
    }
  }
}

module.exports = Validator;

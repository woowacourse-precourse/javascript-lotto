const {
  PRICE_TYPE,
  PRICE_MESSAGE,
  LOTTO_TYPE,
  LOTTO_MESSAGE,
} = require("../constant/errorMessage");

class UserInputValidationError {
  static priceErrorMessage(type) {
    switch (type) {
      case PRICE_TYPE.NOT_NUMBER: {
        throw new Error(PRICE_MESSAGE.NOT_INPUT_NUMBER);
      }
      case PRICE_TYPE.NOT_THOUSAND: {
        throw new Error(PRICE_MESSAGE.ONLY_INPUT_THOUSAND);
      }
      case PRICE_TYPE.NOT_BUY_LOTTO: {
        throw new Error(PRICE_MESSAGE.BELOW_THOUSAND);
      }
    }
  }

  static lottoErrorMessage(type) {
    switch (type) {
      case LOTTO_TYPE.NOT_SIX_NUMBERS: {
        throw new Error(LOTTO_MESSAGE.NOT_SIX_NUMBERS);
      }
      case LOTTO_TYPE.NOT_RANGE: {
        throw new Error(LOTTO_MESSAGE.CHECK_RANGE);
      }
      case LOTTO_TYPE.IS_DUPLICATION: {
        throw new Error(LOTTO_MESSAGE.CHECK_DUPLICATION);
      }
      case LOTTO_TYPE.IS_VALIDATION: {
        throw new Error(LOTTO_MESSAGE.CHECK_VALIDATION_INPUT);
      }
      case LOTTO_TYPE.IS_BONUS_IN_WIN: {
        throw new Error(LOTTO_MESSAGE.CHECK_BONUS_IN_WIN);
      }
    }
  }
}

module.exports = {
  UserInputValidationError,
};

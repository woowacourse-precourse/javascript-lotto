const { Console } = require("@woowacourse/mission-utils");
const {
  PRICE_TYPE,
  PRICE_MESSAGE,
  LOTTO_TYPE,
  LOTTO_MESSAGE,
} = require("../constant/errorMessage");

class UserInputValidationError {
  static priceErrorMessage(type) {
    switch (type) {
      case PRICE_TYPE.NOT_NUMBER:
        Console.print(PRICE_MESSAGE.NOT_INPUT_NUMBER);
        throw new Error(PRICE_TYPE.NOT_NUMBER);
      case PRICE_TYPE.NOT_THOUSAND:
        Console.print(PRICE_MESSAGE.ONLY_INPUT_THOUSAND);
        throw new Error(PRICE_TYPE.NOT_THOUSAND);
      case PRICE_TYPE.NOT_BUY_LOTTO:
        Console.print(PRICE_MESSAGE.BELOW_THOUSAND);
        throw new Error(PRICE_TYPE.NOT_BUY_LOTTO);
    }
  }

  static lottoErrorMessage(type) {
    switch (type) {
      case LOTTO_TYPE.NOT_SIX_NUMBERS:
        Console.print(LOTTO_MESSAGE.NOT_SIX_NUMBERS);
        throw new Error(LOTTO_TYPE.NOT_SIX_NUMBERS);
      case LOTTO_TYPE.NOT_RANGE:
        Console.print(LOTTO_MESSAGE.CHECK_RANGE);
        throw new Error(LOTTO_TYPE.NOT_RANGE);
      case LOTTO_TYPE.IS_DUPLICATION:
        Console.print(LOTTO_MESSAGE.CHECK_DUPLICATION);
        throw new Error(LOTTO_TYPE.IS_DUPLICATION);
      case LOTTO_TYPE.IS_VALIDATION:
        Console.print(LOTTO_MESSAGE.CHECK_VALIDATION_INPUT);
        throw new Error(LOTTO_TYPE.IS_VALIDATION);
      case LOTTO_TYPE.IS_BONUS_IN_WIN:
        Console.print(LOTTO_MESSAGE.CHECK_BONUS_IN_WIN);
        throw new Error(LOTTO_TYPE.IS_BONUS_IN_WIN);
    }
  }
}

module.exports = {
  UserInputValidationError,
};

const { Console } = require("@woowacourse/mission-utils");
const { TYPE, MESSAGE } = require("../constant/errorMessage");

class UserInputValidationError {
  static showErrorMessage(type) {
    switch (type) {
      case TYPE.NOT_NUMBER:
        Console.print(MESSAGE.NOT_INPUT_NUMBER);
        throw new Error(TYPE.NOT_NUMBER);
      case TYPE.NOT_THOUSAND:
        Console.print(MESSAGE.ONLY_INPUT_THOUSAND);
        throw new Error(TYPE.NOT_THOUSAND);
      case TYPE.NOT_BUY_LOTTO:
        Console.print(MESSAGE.BELOW_THOUSAND);
        throw new Error(TYPE.NOT_BUY_LOTTO);
    }
  }
}

module.exports = {
  UserInputValidationError,
};

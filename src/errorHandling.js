const { Console } = require("@woowacourse/mission-utils");
const { TYPE, MESSAGE } = require("./constant/errorMessage");

class UserInputValidationError {
  static showErrorMessage(type) {
    switch (type) {
      case TYPE.NOT_NUMBER:
        Console.print(MESSAGE.NOT_INPUT_NUMBER);
        throw Error(TYPE.NOT_NUMBER);
      case TYPE.NOT_THOUSAND:
        Console.print(MESSAGE.ONLY_INPUT_THOUSAND);
        throw Error(TYPE.NOT_THOUSAND);
    }
  }
}

module.exports = {
  UserInputValidationError,
};

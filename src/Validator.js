const { Console } = require('@woowacourse/mission-utils');
const { PURCHASE } = require('./constants');

class Validator {
  static #ERROR_MESSAGE = Object.freeze({
    isPurchaseInput: '로또 구입 금액은 1,000원 단위의 숫자입니다.',
  });

  static validate(input, validator) {
    if (!validator(input)) {
      Console.close();
      throw new Error(`[ERROR] ${Validator.#ERROR_MESSAGE[validator.name]}`);
    }
  }

  static isPurchaseInput(input) {
    const NUMBER_INPUT_PATTERN = /^[1-9][0-9]+$/;
    return NUMBER_INPUT_PATTERN.test(input) && !(Number(input) % PURCHASE.UNIT);
  }
}

module.exports = Validator;

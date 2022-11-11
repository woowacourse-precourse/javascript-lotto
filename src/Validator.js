const { Console } = require('@woowacourse/mission-utils');
const { PURCHASE, LOTTO } = require('./constants');

class Validator {
  static #ERROR_MESSAGE = Object.freeze({
    isPurchaseInput: '로또 구입 금액은 1,000원 단위의 숫자입니다.',
    isLottoNumber: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
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

  static isLottoNumber(numbers) {
    const lottoNumbers = numbers.filter(
      number => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER,
    );
    return new Set(lottoNumbers).size === LOTTO.SIZE;
  }
}

module.exports = Validator;

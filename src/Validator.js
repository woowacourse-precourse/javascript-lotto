const { Console } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constants');

class Validator {
  static #ERROR_MESSAGE = Object.freeze({
    isPurchaseInput: '로또 구입 금액은 1,000원 단위의 숫자입니다.',
    isLottoNumber: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    isWinningNumber: '당첨 번호는 쉼표로 구분되는 로또 번호여야 합니다.',
  });

  static validate(input, validator) {
    if (!validator(input)) {
      Console.close();
      throw new Error(`[ERROR] ${Validator.#ERROR_MESSAGE[validator.name]}`);
    }
  }

  static isPurchaseInput(input) {
    const NUMBER_INPUT_PATTERN = /^[1-9][0-9]+$/;
    return NUMBER_INPUT_PATTERN.test(input) && !(Number(input) % LOTTO.PRICE);
  }

  static isLottoNumber(numbers) {
    const lottoNumbers = numbers.filter(
      number => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER,
    );
    return new Set(lottoNumbers).size === LOTTO.SIZE;
  }

  static isWinningNumber(input) {
    const winningNumbers = input.split(',').map(Number);
    return Validator.isLottoNumber(winningNumbers);
  }
}

module.exports = Validator;

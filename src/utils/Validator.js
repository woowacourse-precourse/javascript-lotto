const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_BASE } = require('./constants');

class Validator {
  static #ERROR_MESSAGE = Object.freeze({
    isPurchaseInput: '로또 구입 금액은 1,000원 단위의 숫자입니다.',
    areLottoNumbers: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    areWinningNumbers: '당첨 번호는 쉼표로 구분되는 로또 번호여야 합니다.',
    isBonusNumber:
      '보너스 번호는 당첨 번호와 중복되지 않는 로또 번호여야 합니다.',
  });

  static validate(input, validator) {
    if (!validator(input)) {
      Console.close();
      throw new Error(`[ERROR] ${Validator.#ERROR_MESSAGE[validator.name]}`);
    }
  }

  static isPurchaseInput(input) {
    const NUMBER_INPUT_PATTERN = /^[^0]\d+$/;
    return (
      NUMBER_INPUT_PATTERN.test(input) && !(Number(input) % LOTTO_BASE.PRICE)
    );
  }

  static areLottoNumbers(numbers) {
    const lottoNumbers = numbers.filter(
      number => Validator.isInteger(number) && Validator.isLottoNumber(number),
    );
    return new Set(lottoNumbers).size === LOTTO_BASE.SIZE;
  }

  static isInteger(number) {
    return Number.isInteger(number);
  }

  static isLottoNumber(number) {
    return LOTTO_BASE.MIN_NUMBER <= number && number <= LOTTO_BASE.MAX_NUMBER;
  }

  static areWinningNumbers(input) {
    const winningNumbers = input.split(',').map(Number);
    return Validator.areLottoNumbers(winningNumbers);
  }

  static isBonusNumber(winningNumbers) {
    const isBonusNumber = input => {
      const bonusNumber = Number(input);
      const isIncluded = winningNumbers.includes(bonusNumber);
      return (
        !isIncluded &&
        Validator.isInteger(bonusNumber) &&
        Validator.isLottoNumber(bonusNumber)
      );
    };
    return isBonusNumber;
  }
}

module.exports = Validator;

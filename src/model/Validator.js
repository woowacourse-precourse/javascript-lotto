const { RULE, NUMBER_RANGE, PRICE_OF_LOTTO } = require('../constants');

class Validator {
  static validateNaN(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error('[ERROR] 로또 구입 금액은 숫자만 입력 가능합니다.');
    }
  }

  static validateAmount(amount) {
    if (Number(amount) % PRICE_OF_LOTTO) {
      throw new Error(`[ERROR] 로또 구입 금액은 ${PRICE_OF_LOTTO}원 단위만 가능합니다.`);
    }
  }

  static validateNumbersLength(numbers) {
    if (numbers.length !== RULE.FIRST.NUMBER_OF_SAME) {
      throw new Error(`[ERROR] 로또 번호는 ${RULE.FIRST.NUMBER_OF_SAME}개여야 합니다.`);
    }
  }

  static validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== RULE.FIRST.NUMBER_OF_SAME) {
      throw new Error(`[ERROR] 로또 번호는 중복없이 ${RULE.FIRST.NUMBER_OF_SAME}개여야 합니다.`);
    }
  }

  static validateNumberRange(number) {
    if (Number(number) < NUMBER_RANGE.START || Number(number) > NUMBER_RANGE.END) {
      throw new Error(`[ERROR] 로또 번호는 ${NUMBER_RANGE.START}이상 ${NUMBER_RANGE.END}이하 입니다.`);
    }
  }

  static validateBonusNumber(winningNumbers, number) {
    if (winningNumbers.includes(Number(number))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 겹칠 수 없습니다.');
    }
  }
}

module.exports = Validator;

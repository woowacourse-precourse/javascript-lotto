const { MESSAGES, NUMBERS } = require("./Constants");

class Validation {
  /**
   * 플레이어가 게임 중 입력 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  checkAmountExceptions(playerInput) {
    if (Number(playerInput) % NUMBERS !== 0) {
      throw new Error(MESSAGES.ERROR_AMOUNT_UNIT);
    }
  }

  /**
   * 플레이어가 게임 중 당첨 번호가 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {array} winningNumbers - 플레이어가 입력한 당첨 번호
   */
  static validateWinningNumbers(winningNumbers) {
    if (!this.isValidNumberofNumbers(winningNumbers, NUMBERS.LOTTO)) {
      throw new Error(MESSAGES.ERROR_INVALID_NUMBER);
    }
    if (!this.isValidRangeOfNumber(winningNumbers)) {
      throw new Error(MESSAGES.ERROR_INVALID_RANGE);
    }
    if (!this.hasUniqueLottoNumber(winningNumbers)) {
      throw new Error(MESSAGES.ERROR_DUPLICATION_NUMBERS);
    }
  }

  /**
   * 플레이어가 게임 중 입력한 당첨 번호가 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {array} inputNumbers - 당첨 번호
   * @param {number} number - 당첨 번호의 갯수
   */
  static isValidNumberofNumbers(inputNumbers, number) {
    return inputNumbers.length === number;
  }

  static isValidRangeOfNumber(inputNumbers) {
    const isValidRange = (number) => {
      return NUMBERS.MIN_RANGE <= number && number <= NUMBERS.MAX_RANGE;
    };

    return inputNumbers.map(Number).every(isValidRange);
  }

  static hasUniqueLottoNumber(inputNumbers) {
    return new Set(inputNumbers).size === NUMBERS.LOTTO;
  }
}

module.exports = Validation;

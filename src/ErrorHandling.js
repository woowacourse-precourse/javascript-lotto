const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER } = require('./settings');

class ErrorHandling {
  static handleException(exception, message) {
    if (exception) {
      throw new Error(`[ERROR] ${message}`);
    }
  }

  static checkIsNaturalNumber(target, messageSubject) {
    const isNotNaturalNumber = !(target && /^\d+$/.test(String(target)));

    ErrorHandling.handleException(isNotNaturalNumber, `${messageSubject} 자연수여야 합니다.`);
  }

  static checkIsLottoNumberInRange(target, messageSubject) {
    const isNotInRange = target < MIN_LOTTO_NUMBER || target > MAX_LOTTO_NUMBER;

    ErrorHandling.handleException(
      isNotInRange,
      `${messageSubject} 1부터 45 사이의 숫자여야 합니다.`,
    );
  }
}

module.exports = ErrorHandling;

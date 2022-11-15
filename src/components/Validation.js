class Validation {
  static validatePurchase(number) {
    if (number % 1000 !== 0) {
      throw new Error(
        '[ERROR] 구입 금액은 1000원 단위로만 입력할 수 있습니다.',
      );
    }
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 구입 금액은 숫자만 입력할 수 있습니다.');
    }
  }
}

module.exports = Validation;

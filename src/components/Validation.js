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

  static validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    numbers.forEach((number) => {
      if (number > 45 || number < 1) {
        throw new Error('[ERROR] 로또 번호는 1에서 45사이 값이어야 합니다.');
      }
      if (Number.isNaN(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자만 가능합니다.');
      }
    });
  }

  static validateBonus(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 입력할 수 있습니다.');
    }
    if (number > 45 || number < 1) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이 값이어야 합니다.');
    }
  }
}

module.exports = Validation;

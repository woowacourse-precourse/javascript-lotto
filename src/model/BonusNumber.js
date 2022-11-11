const { NUMBER_RANGE } = require('../utils/constants');

class BonusNumber {
  #value;

  constructor(value) {
    this.validate(value);
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  validate(value) {
    this.validateIsNumber(value);
    this.validateNumberRange(value);
  }

  validateIsNumber(value) {
    if (Number.isNaN(value)) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력 가능합니다.');
    }
  }

  validateNumberRange(number) {
    if (number < NUMBER_RANGE.START || number > NUMBER_RANGE.END) {
      throw new Error(`[ERROR] 로또 번호는 ${NUMBER_RANGE.START}이상 ${NUMBER_RANGE.END}이하 입니다.`);
    }
  }
}

module.exports = BonusNumber;

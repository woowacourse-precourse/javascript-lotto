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
    this.validateNumberRange(1, 45, value);
  }

  validateIsNumber(value) {
    if (Number.isNaN(value)) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하 입니다.');
    }
  }

  validateNumberRange(start, end, number) {
    if (number < start || number > end) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하 입니다.');
    }
  }
}

module.exports = BonusNumber;

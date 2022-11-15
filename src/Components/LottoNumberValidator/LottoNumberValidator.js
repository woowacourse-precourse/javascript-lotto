class LottoNumberValidator {
  static execute(number) {
    this.validate(number);
  }

  static validate(number) {
    const MESSAGE = '[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.';

    if (!this.isInRange(number)) throw new Error(MESSAGE);
  }

  static isInRange(number) {
    const MINIMUM = 1;
    const MAXIMUM = 45;

    return MINIMUM <= number && number <= MAXIMUM;
  }
}

module.exports = LottoNumberValidator;

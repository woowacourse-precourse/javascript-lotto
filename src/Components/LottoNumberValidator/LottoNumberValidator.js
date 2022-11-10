class NumberValidator {
  static MINIMUM = 1;
  static MAXIMUM = 45;

  static execute(number) {
    const HAS_OUT_OF_RANGE = number < NumberValidator.MINIMUM || number > NumberValidator.MAXIMUM;

    if (HAS_OUT_OF_RANGE) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.');
    }
  }
}

module.exports = NumberValidator;

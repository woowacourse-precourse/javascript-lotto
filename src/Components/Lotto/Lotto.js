class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.hasLength(numbers);
    this.hasDuplicate(numbers);
    this.isInRange(numbers);
  }

  hasLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  hasDuplicate(numbers) {
    const DUPLICATE_INDEX = numbers.findIndex(
      (number, index, array) => array.indexOf(number) !== index
    );

    if (DUPLICATE_INDEX !== -1) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }

  isInRange(numbers) {
    const MINIMUM = 1;
    const MAXIMUM = 45;
    const HAS_OUT_OF_RANGE = numbers.some((number) => number < MINIMUM || number > MAXIMUM);

    if (HAS_OUT_OF_RANGE) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.');
    }
  }
}

module.exports = Lotto;

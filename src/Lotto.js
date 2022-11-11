const { RULE, NUMBER_RANGE } = require('./utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    this.validateNumberLength(numbers);
    this.validateUnique(numbers);
    numbers.forEach((number) => this.validateNumberRange(number));
  }

  get numbers() {
    return [...this.#numbers];
  }

  validateNumberLength(numbers) {
    if (numbers.length !== RULE.FIRST.NUMBER_OF_SAME) {
      throw new Error(`[ERROR] 로또 번호는 ${RULE.FIRST.NUMBER_OF_SAME}개여야 합니다.`);
    }
  }

  validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== RULE.FIRST.NUMBER_OF_SAME) {
      throw new Error(`[ERROR] 로또 번호는 중복없이 ${RULE.FIRST.NUMBER_OF_SAME}개여야 합니다.`);
    }
  }

  validateNumberRange(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력 가능합니다.');
    }

    if (number < NUMBER_RANGE.START || number > NUMBER_RANGE.END) {
      throw new Error(`[ERROR] 로또 번호는 ${NUMBER_RANGE.START}이상 ${NUMBER_RANGE.END}이하 입니다.`);
    }
  }
}

module.exports = Lotto;

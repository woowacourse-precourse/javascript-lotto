const LOTTO_RANGE_BEGIN = 1;
const LOTTO_RANGE_END = 45;

const ERROR_HEADER = '[ERROR]';
const ERROR_WRONG_LENGTH = `${ERROR_HEADER} 로또 번호는 6개여야 합니다.`;
const ERROR_DUPLICATED = `${ERROR_HEADER} 로또 번호는 중복되지 않아야 합니다.`;
const ERROR_WRONG_RANGE = `${ERROR_HEADER} 로또 번호는 1부터 45까지의 정수여야 합니다.'`;

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      this.validateNumbers(numbers);
      this.#numbers = numbers;
    }
  }

  isDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  isInRange(number) {
    return number >= LOTTO_RANGE_BEGIN && number <= LOTTO_RANGE_END;
  }

  isNumber(number) {
    return /^[0-9]{1,2}$/.test(number);
  }

  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_WRONG_LENGTH);
    }
    if (!this.isDistinct(numbers)) {
      throw new Error(ERROR_DUPLICATED);
    }
    numbers.forEach((number) => {
      if (!this.isNumber(number) || !this.isInRange(Number(number))) {
        throw new Error(ERROR_WRONG_RANGE);
      }
    });
  }
}

module.exports = Lotto;

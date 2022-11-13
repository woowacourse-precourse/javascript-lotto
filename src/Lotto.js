const LOTTERY_NUMBER_LENGTH = 6;
const LOTTERY_MIN_NUMBER = 1;
const LOTTERY_MAX_NUMBER = 45;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
    numbers.forEach((num, index) => {
      this.checkNaN(num);
      this.checkNotInteger(num);
      this.checkOutOfRange(num);
      this.checkDuplication(numbers, num, index);
    });
  }

  getNumber() {
    return this.#numbers;
  }

  checkLength(num) {
    if (num.length !== LOTTERY_NUMBER_LENGTH) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTERY_NUMBER_LENGTH}개여야 합니다.`);
    }
  }

  checkNaN(num) {
    if (Number.isNaN(num)) {
      throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
    }
  }

  checkNotInteger(num) {
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR] 로또 번호는 정수로만 이루어져야 합니다.");
    }
  }

  checkOutOfRange(num) {
    if (num < LOTTERY_MIN_NUMBER || num > LOTTERY_MAX_NUMBER) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);
    }
  }

  checkDuplication(numbers, comparisonNumber, comparisonIndex) {
    numbers.forEach((num, index) => {
      if (comparisonNumber === num && comparisonIndex !== index) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
      }
    });
  }
}

module.exports = Lotto;

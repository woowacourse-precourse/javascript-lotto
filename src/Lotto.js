const { LOTTO_LENGTH, MIN_NUMBER, MAX_NUMBER } = require("./constatnts");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validateNumberLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error("[ERROR] 로또 번호의 범위는 1~45 사이여야 합니다.");
      }
    });
  }

  #validateNumberDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 서로 중복 되지 않아야 합니다.");
    }
  }

  #validate(numbers) {
    this.#validateNumberLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberDuplicate(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }

    if (!numbers.every((number) => number > 0 && number < 46)) {
      throw new Error("[ERROR] 로또 번호는 1~45사이여야 가능합니다.");
    }

    if (!numbers.every((number) => Number.isInteger(number))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }
}

module.exports = Lotto;

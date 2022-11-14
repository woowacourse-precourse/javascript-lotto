class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumber(numbers);
  }
  validate(numbers) {
    const setNumbers = new Set(numbers);
    const validReg = /[0-9]/;

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }
    numbers.map((number) => {
      if (!validReg.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
      if (!(number >= 1 && number <= 45)) {
        throw new Error("[ERROR] 로또 번호는 1~45사이여야 합니다.");
      }
    });
  }

  sortNumber(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumber() {
    return this.#numbers;
  }

  printString() {
    return "[" + this.#numbers.toString().replace(/,/g, ", ") + "]";
  }
}

module.exports = Lotto;

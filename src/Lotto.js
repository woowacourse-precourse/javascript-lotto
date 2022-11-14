class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Lotto;

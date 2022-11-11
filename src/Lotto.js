class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }

  validate(numbers) {
    let uniqueNumbers = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 포함되어있습니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

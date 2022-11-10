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
    const numberSet = new Set(numbers);
    if (numberSet.size != 6)
      throw new Error("[ERROR] 중복값이 포함되어 있습니다.");
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

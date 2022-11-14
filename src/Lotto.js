class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== numSet.size) {
      throw new Error("[ERROR] duplicated character");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

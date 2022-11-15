


class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const set = new Set(numbers)
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (set.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers
  }


}

module.exports = Lotto;

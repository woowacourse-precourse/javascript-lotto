class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  duplicatedate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되는 수가 없어야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

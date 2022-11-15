class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isNotNumberDuplicate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  isNotNumberDuplicate(numbers) {
    const setNumberArr = new Set(numbers);
    if (setNumberArr.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }
}

module.exports = Lotto;

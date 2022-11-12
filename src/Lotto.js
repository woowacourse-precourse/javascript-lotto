class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    console.log(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  duplicate(numbers) {
    if (new Set(numbers).size < 6) {
      throw new Error("[ERROR] 로또 번호 중에서 중복괸 번호가 있습니다.");
    }
  }
}

  // TODO: 추가 기능 구현

module.exports = Lotto;

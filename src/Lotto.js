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
    numbers.forEach(x => {
      if (x < 1 || x > 45) throw new Error("[ERROR] 로또 번호는 0보다 크고 46보다 작아야 합니다.");
    })
    let set = new Set(numbers);
    if (set.size !== 6) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호의 숫자 범위는 1~45입니다.");
      }

      if (numbers.indexOf(numbers[i]) !== i) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야합니다.");
      }
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

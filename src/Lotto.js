class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 수여야 합니다.");
    }
    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 수여야 합니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

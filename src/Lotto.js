class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlay(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  overlay(numbers) {
    const set = new Set(numbers);
    numbers = [...set];
    
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 중복이 포함되서는 안됩니다.");
    }
  }

  

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

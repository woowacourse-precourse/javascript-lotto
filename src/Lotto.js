class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    for(let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]))
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if((new Set(numbers)).size != 6)
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < 1 || 45 < numbers[i])
        throw new Error("[ERROR] 범위 안의 숫자가 아닙니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.checkRepetitionNumber(numbers);
    this.checkInputNumber(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  checkRepetitionNumber(numbers) {
    const numberSet = new Set(numbers);
    if(numbers.length !== numberSet.size) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 존재합니다.");
    }
  }

  checkInputNumber(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      if(isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자가 아닙니다.");
      }
    }
  }
}

module.exports = Lotto;

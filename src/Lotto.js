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
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if(numbersSet.has(NaN)){
      throw new Error("[ERROR] 로또 번호는 양의 정수만 가능합니다.");
    }
    if(Math.min(...numbersSet) < 1 || 46 < Math.max(...numbersSet)){
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

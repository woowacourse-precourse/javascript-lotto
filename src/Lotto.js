class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlap(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  overlap(number) {
    const overlapNumver = new Set(number);
    if (overlapNumver.size !== number.length){
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    }
  }
  
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

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

  // TODO: 추가 기능 구현
  overlap(numbers) {
    // 중복 유무 (true -> 중복)
    numbers.sort((a, b) => a - b);
    const overlapNumber = numbers.reduce((acc, index) => {
      return acc !== index ? (acc = index) : true;
    });
    if (overlapNumber === true) {
      throw new Error("[ERROR] 로또 번호는 중복되서는 안된다.");
    }
  }
}

module.exports = Lotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlap(numbers);
    this.character(numbers);
    this.range(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  overlap(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호는 서로 다른 숫자여야 합니다.");
    }
  }

  character(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] != "number") {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    }
  }

  range(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 45 || numbers[i] < 1) {
        throw new Error("[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.");
      }
    }
  }

  matchNumbers(gameNumbers) {
    let count = 0;
    for (const gameNumber of gameNumbers) {
      if (this.#numbers.includes(gameNumber)) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Lotto;

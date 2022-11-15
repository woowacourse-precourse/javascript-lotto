class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlapCheck(numbers);
    this.characterCheck(numbers);
    this.rangeCheck(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  overlapCheck(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호는 서로 다른 숫자여야 합니다.");
    }
  }

  // 입력값에 숫자가 아닌 것이 있는지 확인
  characterCheck(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] != "number") {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    }
  }

  // 입력값이 범위 내에 있는지 확인
  rangeCheck(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 45 || numbers[i] < 1) {
        throw new Error("[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.");
      }
    }
  }

  matchNumbers(numbers) {
    let count = 0;
    for (const number of numbers) {
      if (this.#numbers.includes(number)) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Lotto;

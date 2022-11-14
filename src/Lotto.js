class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const test = new Set(numbers);
    if (test.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    test.forEach((num) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }

  getMatchCount(winningNumber) {
    return winningNumber.reduce((acc, cur) => {
      return this.#numbers.includes(cur) ? acc + 1 : acc;
    }, 0);
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;

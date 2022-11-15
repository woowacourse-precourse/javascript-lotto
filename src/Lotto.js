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
    if (numbers.length != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers.sort(function (a, b) {
      return a - b;
    });
  }

  matchNumbers(winNumbers, bonusNumber) {
    let winCount = this.#numbers.filter((value) =>
      winNumbers.includes(value)
    ).length;
    if (winCount == 5) {
      winCount = this.isIncludeBonus(bonusNumber) ? 5.5 : 5;
    }
    return winCount;
  }

  isIncludeBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;

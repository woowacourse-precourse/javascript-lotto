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

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  numberToString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  winningCount(winNumber) {
    let winCount = this.#numbers.filter((count) => {
      return winNumber.includes(count);
    });

    return winCount.length;
  }

  rank(winNumber, bonusNumber) {
    const winCount = this.winningCount(winNumber);
    switch (winCount) {
      case 3:
        return 5;
        break;
      case 4:
        return 4;
        break;
      case 5:
        return this.#numbers.includes(bonusNumber) ? 2 : 3;
        break;
      case 6:
        return 1;
        break;
      default:
        0;
        break;
    }
  }
}

module.exports = Lotto;

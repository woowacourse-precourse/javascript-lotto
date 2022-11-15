class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.checkDuplication(numbers);
    this.checkIsNumber(numbers);
    this.checkRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkDuplication(numbers) {
    let set = new Set(numbers);
    if (numbers.length != [...set].length)
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
  }

  checkRange(numbers) {
    numbers.forEach((item) => {
      if (45 < item || item < 1)
        throw new Error("[ERROR] 로또 번호가 범위를 벗어납니다");
    });
  }

  checkIsNumber(numbers) {
    numbers.forEach((item) => {
      if (isNaN(item)) throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    });
  }

  // 당첨번호 비교
  isWinning(answer, bonus) {
    let rank;
    const winningNum = this.#numbers.filter((item) =>
      answer.includes(item)
    ).length;

    if (winningNum == 3) {
      rank = 5;
    } else if (winningNum == 4) {
      rank = 4;
    } else if (winningNum == 5) {
      this.isBonus(bonus) ? (rank = 2) : (rank = 3);
    } else if (winningNum == 6) {
      rank = 1;
    }

    return rank;
  }

  //보너스 번호 비교
  isBonus(bonus) {
    return this.#numbers.includes(bonus);
  }
}

module.exports = Lotto;

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

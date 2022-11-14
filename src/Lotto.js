class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== numSet.size) {
      throw new Error("[ERROR] duplicated character");
    }
  }

  countLottoResult(lotto, bonus) {
    let match = 0;
    let isBonusMatched = false;

    for (let i = 0; i < 6; i++) {
      if (this.#numbers.includes(lotto[i])) {
        match += 1;
      } else if (bonus === lotto[i]) {
        isBonusMatched = true;
      }
    }

    return this.judgeResult(match, isBonusMatched);
  }

  judgeResult(matchCount, isBonusMatched) {
    if (matchCount === 6) {
      return 1;
    } else if (matchCount === 5 && isBonusMatched === true) {
      return 2;
    } else if (matchCount === 5) {
      return 3;
    } else if (matchCount === 4) {
      return 4;
    } else if (matchCount === 5) {
      return 5;
    }
  }
}

module.exports = Lotto;

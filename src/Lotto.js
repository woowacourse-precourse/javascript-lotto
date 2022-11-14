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

  getLottoResult(lottos, bonus) {
    const lottoTotalResult = new Array(5).fill(0);
    const lottoNumbers = lottos.length;

    for (let i = 0; i < lottoNumbers; i++) {
      const lottoResult = this.countLottoResult(lottos[i], bonus);

      if (lottoResult === -1) {
        continue;
      }
      lottoTotalResult[lottoResult - 1] += 1;
    }

    return lottoTotalResult;
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
    } else {
      return -1;
    }
  }
}

module.exports = Lotto;

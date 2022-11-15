const ranks = ["noRank", "noRank", "noRank", "rank5", "rank4", "rank3", "rank1", "rank2"];

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.matchedNumberCount = 0;
    this.isBonusNumberMatched = false;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR]");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR]");
    }
  }

  compareWith(winNumber) {
    const winNumbers = winNumber.split(",").map((number) => Number(number));

    this.#numbers.forEach((lottoNumber) => {
      if (winNumbers.includes(lottoNumber)) this.matchedNumberCount += 1;
    });
  }

  checkMatching(bonusNumber) {
    if (this.matchedNumberCount === 5 && this.#numbers.includes(bonusNumber)) {
      this.isBonusNumberMatched = true;
    }
  }

  setRank() {
    if (this.isBonusNumberMatched === true) {
      return ranks[ranks.length - 1];
    }

    return ranks[this.matchedNumberCount];
  }
}

module.exports = Lotto;

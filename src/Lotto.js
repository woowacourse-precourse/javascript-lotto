const MissionUtils = require("@woowacourse/mission-utils");

const ranks = ["noRank", "noRank", "noRank", "rank5", "rank4", "rank3", "rank1", "rank2"];
const LOTTO_LENGTH = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.matchedNumberCount = 0;
    this.isBonusNumberMatched = false;

    this.print();
  }

  print() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또의 숫자는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또의 각 숫자들은 중복되지 않아야 합니다.");
    }
  }

  compareWith(winNumber) {
    const winNumbers = winNumber.split(",").map((number) => Number(number));

    this.#numbers.forEach((lottoNumber) => {
      if (winNumbers.includes(lottoNumber)) this.matchedNumberCount += 1;
    });
  }

  has(bonusNumber) {
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

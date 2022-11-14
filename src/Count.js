const {
  REWARD_LIST,
  MATCH_LIST,
  MATCH_NUMBER,
  CALCULATION,
} = require("./constants/values");

class Calculate {
  #publish;
  #winning;
  #bonus;

  constructor(publish, winning, bonus) {
    this.#publish = publish;
    this.#winning = winning;
    this.#bonus = bonus;
    this.quantityList = [0, 0, 0, 0, 0];
    this.numberList = MATCH_LIST;
    this.rewardList = REWARD_LIST;
    this.totalReward = 0;
    this.compare();
  }

  compare() {
    this.#publish.forEach((piece) => {
      let count = { winning: 0, bonus: 0 };
      piece.forEach((number) => {
        this.countWinning(number, count);
        this.countBonus(number, count);
      });

      this.countTotal(count);
    });
  }

  countWinning(number, count) {
    if (this.#winning.includes(number)) {
      count.winning += CALCULATION.SCORE;
    }
  }

  countBonus(number, count) {
    if (number === this.#bonus) {
      count.bonus += CALCULATION.SCORE;
    }
  }

  countTotal(count) {
    if (count.winning === MATCH_NUMBER.THREE)
      this.quantityList[0] += CALCULATION.SCORE;
    if (count.winning === MATCH_NUMBER.FOUR)
      this.quantityList[1] += CALCULATION.SCORE;
    if (count.winning === MATCH_NUMBER.FIVE) {
      if (count.bonus === MATCH_NUMBER.FIVE_BONUS)
        this.quantityList[3] += CALCULATION.SCORE;
      else this.quantityList[2] += CALCULATION.SCORE;
    }
    if (count.winning === MATCH_NUMBER.SIX)
      this.quantityList[4] += CALCULATION.SCORE;
  }
}

module.exports = Calculate;

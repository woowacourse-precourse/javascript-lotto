const { REWARD_LIST, MATCH_LIST } = require("./constants/values");

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
      count.winning += 1;
    }
  }

  countBonus(number, count) {
    if (number === this.#bonus) {
      count.bonus += 1;
    }
  }

  countTotal(count) {
    if (count.winning === 3) this.quantityList[0] += 1;
    if (count.winning === 4) this.quantityList[1] += 1;
    if (count.winning === 5) {
      if (count.bonus === 1) this.quantityList[3] += 1;
      else this.quantityList[2] += 1;
    }
    if (count.winning === 6) this.quantityList[4] += 1;
  }
}

module.exports = Calculate;

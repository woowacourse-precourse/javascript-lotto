const { Console } = require("@woowacourse/mission-utils");

class Calculate {
  #publish;
  #winning;
  #bonus;

  constructor(publish, winning, bonus) {
    this.#publish = publish;
    this.#winning = winning;
    this.#bonus = bonus;
    this.quantityList = [0, 0, 0, 0, 0];
    this.numberList = [
      "3개 일치",
      "4개 일치",
      "5개 일치",
      "5개 일치, 보너스 볼 일치",
      "6개 일치",
    ];
    this.rewardList = [5000, 50000, 1500000, 30000000, 2000000000];
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

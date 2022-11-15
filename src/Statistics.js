const { PRIZE } = require("./constant/inputMessage");

class Stats {
  #unitedThird;
  #unitedFourth;
  #unitedFifth;
  #unitedSixthWithBonus;
  #unitedSixth;
  #unitedTotal;

  constructor(lottos, win, bonus, price) {
    this.calculateResults(lottos, win, bonus, price);
  }

  calculateResults(lottos, win, bonus, price) {
    lottos.forEach((lotto) => {
      const [winMatch, bonusMatch] = this.matchLottos(lotto, win, bonus);

      if (winMatch === PRIZE.FIFTH.MATCH_BALL) {
        this.#unitedThird = (this.#unitedThird || 0) + 1;
      }

      if (winMatch === PRIZE.FOURTH.MATCH_BALL) {
        this.#unitedFourth = (this.#unitedFourth || 0) + 1;
      }

      if (winMatch === PRIZE.THIRD.MATCH_BALL && !bonusMatch) {
        this.#unitedFifth = (this.#unitedFifth || 0) + 1;
      }

      if (winMatch === PRIZE.SECOND.MATCH_BALL && bonusMatch) {
        this.#unitedSixthWithBonus = (this.#unitedSixthWithBonus || 0) + 1;
      }

      if (winMatch === PRIZE.FIRST.MATCH_BALL) {
        this.#unitedSixth = (this.#unitedSixth || 0) + 1;
      }
    });

    this.calculateRateOfReturn(price);
  }

  matchLottos(lotto, win, bonus) {
    const winMatch = lotto.filter((number) => win.includes(number)).length;
    const bonusMatch = lotto.filter((number) => number === bonus).length;

    return [winMatch, bonusMatch];
  }

  calculateRateOfReturn(price) {
    const obj = {
      six: this.#unitedSixth || 0,
      sixWithBouns: this.#unitedSixthWithBonus || 0,
      five: this.#unitedFifth || 0,
      four: this.#unitedFourth || 0,
      three: this.#unitedThird || 0,
    };

    const prizeMoney = Object.values(PRIZE).map((prize) => prize.MONEY);
    const total = Object.values(obj)
      .map((v, i) => v * prizeMoney[i])
      .reduce((prev, curr) => prev + curr, 0);

    this.#unitedTotal = ((total / price) * 100).toFixed(1);
  }

  getResults() {
    const obj = {
      three: this.#unitedThird || 0,
      four: this.#unitedFourth || 0,
      five: this.#unitedFifth || 0,
      sixWithBouns: this.#unitedSixthWithBonus || 0,
      six: this.#unitedSixth || 0,
      total: this.#unitedTotal,
    };

    return obj;
  }
}

module.exports = {
  Stats,
};

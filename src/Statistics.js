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

      if (winMatch === 3) {
        this.#unitedThird = (this.#unitedThird || 0) + 1;
      }

      if (winMatch === 4) {
        this.#unitedFourth = (this.#unitedFourth || 0) + 1;
      }

      if (winMatch === 5 && !bonusMatch) {
        this.#unitedFifth = (this.#unitedFifth || 0) + 1;
      }

      if (winMatch === 5 && bonusMatch) {
        this.#unitedSixthWithBonus = (this.#unitedSixthWithBonus || 0) + 1;
      }

      if (winMatch === 6) {
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
      three: this.#unitedThird || 0,
      four: this.#unitedFourth || 0,
      five: this.#unitedFifth || 0,
      sixWithBouns: this.#unitedSixthWithBonus || 0,
      six: this.#unitedSixth || 0,
    };

    const prizeMoney = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];
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

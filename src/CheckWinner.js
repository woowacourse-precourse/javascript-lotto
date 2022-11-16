const { RANKING } = require('./common/constants');
class CheckWinner {
  #bouns;
  #winningLotto;
  #myLotto;
  constructor(winningLotto, bouns, myLotto) {
    this.#winningLotto = winningLotto;
    this.#bouns = bouns;
    this.#myLotto = myLotto;
    this.ranking = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.reward = 0;
    this.checkPrice();
  }

  checkPrice() {
    for (let i = 0; i < this.#myLotto.length; i++) {
      let count = 0;
      let bonus = 0;

      this.#myLotto[i].map((n) => {
        if (this.#winningLotto.includes(n)) {
          count++;
        }
        if (n === this.#bouns) {
          bonus++;
        }
      });
      this.divideWinner(count, bonus);
    }
  }

  divideWinner(count, bonus) {
    if (count === 3) {
      this.ranking[RANKING.FIVE]++;
      this.reward += 5000;
      return;
    }
    if (count === 4) {
      this.ranking[RANKING.FOUR]++;
      this.reward += 50000;
      return;
    }
    if (count === 5) {
      if (bonus === 0) {
        this.ranking[RANKING.THREE]++;
        this.reward += 1500000;
        return;
      }
      this.ranking[RANKING.TWO]++;
      this.reward += 30000000;
      return;
    }
    if (count === 6) {
      this.ranking[RANKING.ONE]++;
      this.reward += 2000000000;
      return;
    }
  }
  getReward() {
    return this.reward;
  }
  getRanking() {
    return this.ranking;
  }
}

module.exports = CheckWinner;

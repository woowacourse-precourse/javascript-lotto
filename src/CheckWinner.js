const MissionUtils = require('@woowacourse/mission-utils');

class CheckWinner {
  #count;
  #bouns;
  #winningLooto;
  #myLotto;
  constructor(winningLotto, bouns, myLotto) {
    this.#winningLooto = winningLotto;
    this.#bouns = bouns;
    this.#myLotto = myLotto;

    this.rank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.reward = 0;
    this.checkPrice();
  }

  checkPrice() {
    for (let i = 0; i < this.#myLotto.length; i++) {
      let count = 0;
      let bonus = 0;
      this.#myLotto[i].map((n) => {
        if (this.#winningLooto.includes(n)) {
          count++;
        }
        if (n == this.#bouns) {
          bonus++;
        }
      });
      MissionUtils.Console.print(
        '결과' + '카운드: ' + count + ' 보너스:' + bonus
      );
      this.divideWinner(count, bonus);
    }
  }

  divideWinner(count, bonus) {
    if (count === 3) {
      this.rank['fifth'] += 1;
      this.reward += 5000;
      return;
    }
    if (count === 4) {
      this.rank['fourth']++;
      this.reward += 50000;
      return;
    }
    if (count === 5) {
      if (bonus === 0) {
        this.rank['third']++;
        this.reward += 1500000;
        return;
      }
      this.rank['second']++;
      this.reward += 30000000;
      return;
    }
    if (count === 6) {
      this.rank['first']++;
      this.reward += 2000000000;
      return;
    }

    MissionUtils.Console.print('최종상금:' + this.reward);
  }
  getReward() {
    return this.reward;
  }
}

module.exports = CheckWinner;

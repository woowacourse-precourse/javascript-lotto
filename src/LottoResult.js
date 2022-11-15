const MissionUtils = require("@woowacourse/mission-utils");
const earnedMoney = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  7: 30000000,
};

class LottoResult {
  #score;

  constructor(userLotto, wonLotto, bonusNumber) {
    this.profit = 0;
    this.score = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    this.calculateLotto(userLotto, wonLotto, bonusNumber);
    this.#score = this.score;
    this.calculateProfit(userLotto.length);
  }

  calculateLotto(userLotto, wonLotto, bonusNumber) {
    for (let index = 0; index < userLotto.length; index++) {
      this.calculate(userLotto[index], wonLotto, bonusNumber);
    }
  }

  calculate(userLotto, wonLotto, bonusNumber) {
    let won = 0;
    let bonusWon = false;
    for (let index = 0; index < 6; index++) {
      console.log(typeof wonLotto);
      if (wonLotto.includes(userLotto[index])) {
        won += 1;
      }
      if (userLotto[index] === bonusNumber) {
        bonusWon = true;
      }
    }
    this.saveResult(won, bonusWon);
  }

  saveResult(won, bonusWon) {
    if (won === 5 && bonusWon) {
      this.score[7] += 1;
    }
    if (won === 5 && !bonusWon) {
      this.score[5] += 1;
    }
    if (won !== 5 && won > 2) {
      this.score[won] += 1;
    }
  }

  calculateProfit(totalLotto) {
    let earnedTotal = 0;
    for (let index = 3; index < 8; index++) {
      earnedTotal += this.#score[index] * earnedMoney[index];
    }
    if (earnedTotal) {
      this.profit = Math.ceil((earnedTotal / (totalLotto * 1000)) * 1000) / 10;
    }
  }

  //   printResult(){
  //     MissionUtils.Console.print(

  //     )

  //   }
}

module.exports = LottoResult;

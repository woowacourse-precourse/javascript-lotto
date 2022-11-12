const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const UI = require("./UI");

class Match {
  matchRecord = [0, 0, 0, 0];
  bonusFlag = 0;

  countMatchingNumbers(games) {
    let count = 0;
    const winNumbers = UI.winningNumbers();
    const lotto = new Lotto(winNumbers.split(",").map(Number));
    const bonusNumber = Number(UI.bonusNumber());
    const bonus = new Bonus(bonusNumber);
    for (const game of games) {
      count = lotto.matchNumbers(game);
      if (count >= 3) this.matchRecord[count - 3] += 1;
      if (count === 5){
        this.bonusFlag = bonus.matchBonus(game);
      }
    }
  }
}

module.exports = Match;

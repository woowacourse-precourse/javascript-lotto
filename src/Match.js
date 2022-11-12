const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const UI = require("./UI");

class Match {
  countMatchingNumbers(games) {
    let matchRecord = [0, 0, 0, 0];
    let count = 0;
    const str = UI.winningNumbers();
    const arr = str.split(",").map(Number);
    const lotto = new Lotto(arr);
    for (const game of games) {
      count = lotto.matchNumbers(game);
      if (count >= 3) matchRecord[count - 3] += 1;
    }
    return matchRecord;
  }
}

module.exports = Match;

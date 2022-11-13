const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const UI = require("./UI");

class Match {
  matchRecord = [0, 0, 0, 0];
  bonusFlag = 0;

  // 자동 발행된 로또 번호들이 당첨 번호와 서로 일치하는 게 있는지 검사
  countMatchingNumbers(games) {
    let count = 0;
    const winNumbers = UI.winningNumbers();
    const lotto = new Lotto(winNumbers.split(",").map(Number));
    const bonusNumber = Number(UI.bonusNumber());
    const bonus = new Bonus(bonusNumber);
    for (const game of games) {
      count = lotto.matchNumbers(game);
      if (count >= 3) this.matchRecord[count - 3] += 1;
      if (count === 5) {
        this.bonusFlag = bonus.matchBonus(game);
      }
    }
  }
}

module.exports = Match;

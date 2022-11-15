const MissionUtils = require("@woowacourse/mission-utils");
const LottoCalculator = require("./LottoCalculator");

class LottoResultManager {
  constructor() {
    this.profitRate = 0;
    this.WinHistoryMessage = "";

    this.winCount = {
      rank1: 0,
      rank2: 0,
      rank3: 0,
      rank4: 0,
      rank5: 0,
    };
  }

  countWin(winRanks) {
    winRanks.forEach((winRank) => {
      if (winRank !== "noRank") {
        this.winCount[winRank] += 1;
      }
    });
  }
}

module.exports = LottoResultManager;

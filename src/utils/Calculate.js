const { Console } = require("@woowacourse/mission-utils");
const RankingCalculate = require('./RankingCalculate');

class Calculate {
  constructor() {
    this.ranking = [];
  };

  rankingCalculate(lottoList, answerNumber, bonusNumber) {
    const rank = new RankingCalculate(lottoList, answerNumber, bonusNumber);
    this.ranking = rank.rankList
    // Console.print(this.ranking)
  };

}

module.exports = Calculate;
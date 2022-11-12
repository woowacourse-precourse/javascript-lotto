const { Console } = require("@woowacourse/mission-utils");
const { NUMBER } = require('../utils/Constants');
const RankingCalculate = require('./RankingCalculate');
const PrintRanking = require('../print/PrintRanking')

class Calculate {
  constructor() {
    this.printRank = new PrintRanking();
    this.ranking = [];
    this.prizeMoney = 0;
    this.earnPercentage;
  };

  rankingCalculate(lottoList, answerNumber, bonusNumber) {
    const rank = new RankingCalculate(lottoList, answerNumber, bonusNumber);
    this.ranking = rank.rankList;
    this.printRank.showRanking(this.ranking);
  };

  // prizeCalculate(price) {
  //   for (let i = 0; i < 5; i++) {
  //     this.prizeMoney += NUMBER.PRIZE_MONEY[i] * this.ranking[i];
  //   };
  //   this.earnPercentage = this.prizeMoney
  //   Console.print(this.prizeMoney);

  // };

};

module.exports = Calculate;
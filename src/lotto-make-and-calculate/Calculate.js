const { NUMBER } = require('../utils/Constants');
const RankingCalculate = require('./RankingCalculate');
const PrintResults = require('../print/PrintResults');

class Calculate {
  constructor() {
    this.printResult = new PrintResults();
    this.ranking = [];
    this.prizeMoney = 0;
    this.earnPercentage;
  };

  rankingCalculate(lottoList, answerNumber, bonusNumber) {
    const rank = new RankingCalculate(lottoList, answerNumber, bonusNumber);
    this.ranking = rank.rankList;
    this.printResult.printRanking(this.ranking);
  };

  prizeCalculate(price) {
    for (let i = 0; i < 5; i++) {
      this.prizeMoney += NUMBER.PRIZE_MONEY[i] * this.ranking[i];
    };
    
    this.earnPercentage = (this.prizeMoney / price * 100).toFixed(1);
    this.printResult.printPriz(this.earnPercentage);
  };
};

module.exports = Calculate;

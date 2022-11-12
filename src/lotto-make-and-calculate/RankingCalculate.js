const { NUMBER } = require('../utils/Constants');

class RankingCalculate {
  constructor(lottoList, answer, bonus) {
    this.lottoList = lottoList;
    this.answer = answer;
    this.bonus = bonus;
    this.rankList = this.rankCalculateStart();
  };

  rankCalculateStart() {
    let rank = [0,0,0,0,0];

    for (let i = 0;i < 5;i++) {
      rank[i] = this.countAnswer(NUMBER.ANSWER_COUNT[i], i);
    };

    return rank;
  };

  countAnswer(correctNum, index) {
    let CorrectCount = 0;

    for (let i = 0; i < this.lottoList.length; i++) {
      CorrectCount += this.countEachAnswer(this.lottoList[i], correctNum, index);
    };
    
    return CorrectCount;
  };

  countEachAnswer(eachAnswer, correctNum, index) {
    if ((index === 3) &&  eachAnswer.filter(eachNumber => this.answer.includes(eachNumber)).length === correctNum) {
      return 1;
    };

    if (eachAnswer.filter(eachNumber => this.answer.includes(eachNumber)).length === correctNum) {
      return 1;
    };

    return 0;
  };
};

module.exports = RankingCalculate;

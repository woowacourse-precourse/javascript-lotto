const MissionUtils = require('@woowacourse/mission-utils');

class Calculate{
  constructor(){
    this.getWinningCnt = new Array(5).fill(0); //1등(index 0) ~ 5등(index 4)
    this.bonusNum = 0;
    this.answers = [];
    this.testcase = [];
  }

  testAllLottos(lottos, answers, bonusNum){
    this.bonusNum = bonusNum;
    this.answers = answers;
    lottos.map((testcase) => {
      this.testcase = testcase;
      this.sumSuccessfulScores(this.getEachCalcScore(testcase, this.answers));
    })
    return this.getWinningCnt;
  }

  getEachCalcScore(baseLotto, answerLotto){
    let cnt = answerLotto.filter(num => baseLotto.includes(num)).length;
    return cnt;
  }

  sumSuccessfulScores(cnt){
    switch(cnt){
      case 3:
        this.getWinningCnt[4] += 1;
        break;
      case 4:
        this.getWinningCnt[3] += 1;
        break;
      case 5: 
        this.bonusCheck(this.bonusNum);
        break;
      case 6:
        this.getWinningCnt[0] += 1;
        break;
    }
  }

  bonusCheck(bonusNum){
    (this.testcase.includes(parseInt(bonusNum))) ? this.getWinningCnt[1] += 1 : this.getWinningCnt[2] += 1;
  }

}

module.exports = Calculate;
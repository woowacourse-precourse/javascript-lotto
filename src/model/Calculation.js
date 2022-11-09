const MissionUtils = require('@woowacourse/mission-utils');

class Calculate{
  constructor(){
    this.winningCnt = new Array(5).fill(0); //1등(index 0) ~ 5등(index 4)
    this.bonusNum = 0;
    this.answers = [];
    this.testcase = [];
  }

  testAllLottos(lottos, answers, bonusNum){
    this.bonusNum = bonusNum;
    this.answers = answers;
    lottos.forEach((testcase) => {
      this.testcase = testcase;
      this.winALottery(this.calcScores(testcase, this.answers));
    })
    return this.winningCnt;
  }

  calcScores(baseLotto, answerLotto){
    let cnt = 0;
    answerLotto.map(num => {
      if (baseLotto.includes(num)){
        cnt += 1;
      }
    })
    return cnt;
  }

  winALottery(cnt){
    switch(cnt){
      case 3:
        this.winningCnt[4] += 1;
        break;
      case 4:
        this.winningCnt[3] += 1;
        break;
      case 5: 
        this.bonusCheck(this.bonusNum);
        break;
      case 6:
        this.winningCnt[0] += 1;
        break;
    }
    return this.winningCnt;
  }

  bonusCheck(bonusNum){
    (this.testcase.includes(parseInt(bonusNum))) ? this.winningCnt[1] += 1 : this.winningCnt[2] += 1;
  }

}

module.exports = Calculate;
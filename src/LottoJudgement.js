const Lotto = require("./Lotto");

class LottoJudgement {
  #scoreBoard = [0, 0, 0, 0, 0];

  constructor(userLottoArray, winLottoNum, BonusNum) {
    this.userLottoArray = userLottoArray;
    this.winLottoNum = winLottoNum;
    this.BonusNum = BonusNum;
  }

  judgeStart() {
    for (let i = 0; i < this.userLottoArray.length; i++) {
      const eachLotto = new Lotto(this.userLottoArray[i]); /// 유효성 체크
      this.eachLottoJudge(this.userLottoArray[i]);
    }
    this.getScoreBoard();
  }

  eachLottoJudge(eachLotto) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (eachLotto.includes(this.winLottoNum[i]) == true) {
        count += 1;
      }
    }
    if (count == 5 && eachLotto.includes(this.BonusNum) == true) {
      count += 5; // 2st는 10 이 됨
      this.scoreCount(count);
    } else {
      this.scoreCount(count);
    }
  }
}

module.exports = LottoJudgement;

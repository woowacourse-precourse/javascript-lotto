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
}

module.exports = LottoJudgement;

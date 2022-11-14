class LottoJudgement {
  #scoreBoard = [0, 0, 0, 0, 0];

  constructor(userLottoArray, winLottoNum, BonusNum) {
    this.userLottoArray = userLottoArray;
    this.winLottoNum = winLottoNum;
    this.BonusNum = BonusNum;
  }

  judgeStart() {
    for (let i = 0; i < this.userLottoArray.length; i++) {
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

  scoreCount(count) {
    switch (count) {
      case 3:
        this.#scoreBoard[4] += 1; // 3개 5등
        break;
      case 4:
        this.#scoreBoard[3] += 1; // 4개 4등
        break;
      case 5:
        this.#scoreBoard[2] += 1; // 5개 3등
        break;
      case 6:
        this.#scoreBoard[0] += 1; // 6개 1등
        break;
      case 10:
        this.#scoreBoard[1] += 1; // 5개+1 2등
    }
  }

  getScoreBoard() {
    return this.#scoreBoard;
  }
}

module.exports = LottoJudgement;

class Score {
  constructor() {}

  calculateEachLottoScore(eachLotto, winningNum) {
    let score = 0;
    eachLotto.forEach((lottoNumber) => {
      if (winningNum.includes(lottoNumber)) {
        score += 1;
      }
    });
    return score;
  }

  getLottoScores(lottoArr, winningNum) {
    const scores = [];
    for (let i = 0; i < lottoArr.length; i++) {
      const eachScore = this.calculateEachLottoScore(lottoArr[i], winningNum);
      scores.push(eachScore);
    }
    return scores;
  }
}

module.exports = Score;

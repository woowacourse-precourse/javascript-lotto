const { RANKING } = require('./constants');

class ScoreMachine {
  static lottoNumberList = [];
  #winningNumber;
  #bonusNumber;
  #result = {
    [RANKING.FIFTH]: 0,
    [RANKING.FOURTH]: 0,
    [RANKING.THIRD]: 0,
    [RANKING.SECOND]: 0,
    [RANKING.FIRST]: 0,
  };

  compare(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;

    ScoreMachine.lottoNumberList.forEach((lottoNumber) => {
      this.compareWinningNumber(lottoNumber);
    });
  }

  compareWinningNumber(lottoNumber) {
    let matchCount = 0;
    this.#winningNumber.forEach((number) => {
      if (lottoNumber.includes(number)) matchCount += 1;
    });
    this.rank(matchCount, lottoNumber);
  }

  rank(matchCount, lottoNumber) {
    const ranking = {
      3: RANKING.FIFTH,
      4: RANKING.FOURTH,
      5: lottoNumber.includes(this.#bonusNumber) ? RANKING.SECOND : RANKING.THIRD,
      6: RANKING.FIRST,
    }[matchCount];

    if (ranking) this.#result[ranking] += 1;
  }
}

module.exports = ScoreMachine;

const LottoCalculator = require('./LottoCalculator');

class LottoWinCount extends LottoCalculator {
  #rank;

  constructor(inputs) {
    super(inputs);

    this.#rank = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    this.convertRankData();
  }

  convertRankData() {
    const scoreBoard = this.getLottoCountScore();

    Object.keys(this.#rank).forEach((rank, index) => {
      this.#rank[rank] = scoreBoard[index];
    });
  }

  getResult() {
    return this.#rank;
  }
}

module.exports = LottoWinCount;

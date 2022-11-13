const { LOTTO_WINNING_AMOUNT } = require('./constant');
const Match = require('./Matcher');

class LottoEarnings {
  constructor() {
    this.money = 0;
  }

  getEarnings() {
    const earnings = (
      ((Match.lottoWinnerNumber[0] * LOTTO_WINNING_AMOUNT.FIRST_PRIZE +
        Match.lottoWinnerNumber[1] * LOTTO_WINNING_AMOUNT.SECOND_PRIZE +
        Match.lottoWinnerNumber[2] * LOTTO_WINNING_AMOUNT.THIRD_PRIZE +
        Match.lottoWinnerNumber[3] * LOTTO_WINNING_AMOUNT.FORTH_PRIZE +
        Match.lottoWinnerNumber[4] * LOTTO_WINNING_AMOUNT.FIFTH_PRIZE) /
        this.money) *
      100
    ).toFixed(1);
    return earnings;
  }
}

const LOTTOEARNINGS = new LottoEarnings();

module.exports = LOTTOEARNINGS;

const { Console } = require('@woowacourse/mission-utils');

const { RANKING, PRIZE_MONEY, RATE_OF_RETURN, LOTTO, RESULT } = require('./constants');

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
    [RATE_OF_RETURN]: 0,
  };

  compare(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;

    ScoreMachine.lottoNumberList.forEach((lottoNumber) => {
      this.compareWinningNumber(lottoNumber);
    });

    this.calculateRateOfReturn();
    this.printResult();
    this.endGame();
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

  calculateRateOfReturn() {
    const purchaseAmount = ScoreMachine.lottoNumberList.length * LOTTO.PRICE;
    const totalPrizeMoney = Object.keys(PRIZE_MONEY).reduce(
      (money, ranking) => money + this.#result[RANKING[ranking]] * PRIZE_MONEY[ranking],
      0
    );
    this.#result[RATE_OF_RETURN] = (totalPrizeMoney / purchaseAmount) * 100;
  }

  printResult() {
    Object.keys(RANKING).forEach((ranking) => {
      Console.print(RESULT[ranking](this.#result[RANKING[ranking]]));
    });

    Console.print(RESULT.RATE_OF_RETURN(this.#result[RATE_OF_RETURN]));
  }

  endGame() {
    Console.close();
  }
}

module.exports = ScoreMachine;

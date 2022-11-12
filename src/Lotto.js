const Validator = require('./Validator');
const GameTools = require('./GameTools');
const Render = require('./Render');
const { RANK, LOTTO } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  informStateOfWinning(userLottos, bonusNumber) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = GameTools.getMatchingNumCount(lotto, this.#numbers);
      const matchesBonusNum = lotto.includes(Number(bonusNumber));
      const rank = GameTools.getWinningRanking(matchingCount, matchesBonusNum);
      if (rank !== -1) state[rank] += 1;

      return state;
    }, Array(LOTTO.NUM_OF_PRIZE).fill(0));

    this.calcTotalPrize(winningState, userLottos.length);
  }

  calcTotalPrize(winningState, countOfLottos) {
    const totalPrize = GameTools.calcTotalPrize(winningState);

    this.calcRateOfReturn(winningState, totalPrize, countOfLottos);
  }

  calcRateOfReturn(winningState, totalPrize, countOfLottos) {
    const rateOfReturn = GameTools.calcRateOfReturn(totalPrize, countOfLottos);

    this.renderGameResult(winningState, rateOfReturn);
  }

  renderGameResult(winningState, rateOfReturn) {
    Render.WinningStatistics(winningState, rateOfReturn);
  }
}

module.exports = Lotto;

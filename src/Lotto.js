const Validator = require('./Validator');
const GameTools = require('./GameTools');
const Render = require('./Render');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers
      .split(',')
      .map((num) => Number(num))
      .sort((a, b) => a - b);
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  stateOfWinning(userLottos, bonusNumber, stateOfPrize) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = GameTools.getMatchingNumCount(lotto, this.#numbers);
      const matchesBonusNumber = lotto.includes(Number(bonusNumber));
      if (matchingCount === 6) state.first += 1;
      if (matchingCount === 5 && matchesBonusNumber) state.second += 1;
      if (matchingCount === 5 && !matchesBonusNumber) state.third += 1;
      if (matchingCount === 4) state.fourth += 1;
      if (matchingCount === 3) state.fifth += 1;

      return state;
    }, stateOfPrize);
    this.calcTotalPrize(winningState, userLottos.length);
  }

  calcTotalPrize(winningState, countOfLotto) {
    const totalPrize = GameTools.calcTotalPrize(winningState);

    this.calcRateOfReturn(winningState, totalPrize, countOfLotto);
  }

  calcRateOfReturn(winningState, totalPrize, countOfLotto) {
    const rateOfReturn = GameTools.calcRateOfReturn(totalPrize, countOfLotto);

    this.renderGameResult(winningState, rateOfReturn);
  }

  renderGameResult(winningState, rateOfReturn) {
    Render.WinningStatistics(winningState, rateOfReturn);
  }
}

module.exports = Lotto;

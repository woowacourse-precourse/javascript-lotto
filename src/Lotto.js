const Validator = require('./Validator');
const GameTools = require('./GameTools');
const Render = require('./Render');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  stateOfWinning(userLottos, bonusNumber, stateOfPrize) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = GameTools.getMatchingNumCount(lotto, this.#numbers);
      const matchesBonusNumber = lotto.includes(Number(bonusNumber));
      if (matchingCount === 6) state.first += 1;
      else if (matchingCount === 5 && matchesBonusNumber) state.second += 1;
      else if (matchingCount === 5 && !matchesBonusNumber) state.third += 1;
      else if (matchingCount === 4) state.fourth += 1;
      else if (matchingCount === 3) state.fifth += 1;

      return state;
    }, stateOfPrize);
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

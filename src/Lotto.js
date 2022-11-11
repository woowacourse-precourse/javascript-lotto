const Validator = require('./Validator');
const GameTools = require('./GameTools');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  statusOfPrize(userLottos, bonusNumber, winningState) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = GameTools.getMatchingNumCount(lotto, this.#numbers);
      const matchesBonusNumber = lotto.includes(bonusNumber);
      if (matchingCount === 6) state.first += 1;
      else if (matchingCount === 5 && matchesBonusNumber) state.second += 1;
      if (matchingCount === 5 && !matchesBonusNumber) state.third += 1;
      if (matchingCount === 4) state.fourth += 1;
      if (matchingCount === 3) state.fifth += 1;

      return state;
    }, winningState);

    return winningState;
  }

  prizeResult(userLottos, bonusNumber, result) {
    return userLottos.reduce((acc, cur) => {
      const matchingNumberCount = GameTools.getMatchingNumberCount(
        cur,
        this.#numbers
      );
      const matchesBonusNumber = cur.includes(bonusNumber);
      if (matchingNumberCount === 6) acc.first += 1;
      else if (matchingNumberCount === 5 && matchesBonusNumber) acc.second += 1;
      if (matchingNumberCount === 5 && !matchesBonusNumber) acc.third += 1;
      if (matchingNumberCount === 4) acc.fourth += 1;
      if (matchingNumberCount === 3) acc.fifth += 1;

      return acc;
    }, result);
  }
}

module.exports = Lotto;

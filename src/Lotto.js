const Validator = require('./Validator');
const GameTools = require('./GameTools');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInValidWinningNumbers(numbers);
  }

  get winningNumbers() {
    return this.#numbers;
  }

  prizeResult(userLottoList, bonusNumber, result) {
    return userLottoList.reduce((acc, cur) => {
      const matchingNumberCount = GameTools.getMatchingNumberCount(
        cur,
        this.#numbers
      );
      const matchesBonusNumber = cur.includes(bonusNumber);
      if (matchingNumberCount === 6) acc.first += 1;
      if (matchingNumberCount === 5 && matchesBonusNumber) acc.second += 1;
      if (matchingNumberCount === 5 && !matchesBonusNumber) acc.third += 1;
      if (matchingNumberCount === 4) acc.fourth += 1;
      if (matchingNumberCount === 3) acc.fifth += 1;

      return acc;
    }, result);
  }
}

module.exports = Lotto;

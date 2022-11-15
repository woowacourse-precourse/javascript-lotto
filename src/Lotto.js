
const { ERROR, LOTTO_NUMBER} = require('./Contants.js');

class Lotto {
  #numbers;


  constructor(numbers) {
    this.checkEachValue(numbers);
    this.checkOverlap(numbers);
  }

  checkOverlap(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error(ERROR.CHECK_OVERLAP_LENGTH);
    }
  }

  checkEachValue(numbers) {
    numbers.forEach(value => {
      if (isNaN(value)) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
      if (value < LOTTO_NUMBER.MIN_RANGE || value > LOTTO_NUMBER.MAX_RANGE) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
    });
  }

  static createWinningLottoNumgber(userInput) {
    const userInputArray = userInput.split("");
    return userInputArray;
  }

  static getSplited(userInput) {
    const splitedInput = userInput.split(",");
    return splitedInput;
  }

  static UserLotto(userInput) {
    const userLotto = userInput.map((item) => Number(item));
    return userLotto;
  }
}

module.exports = Lotto;

const { LOTTO, ERROR } = require('./Constants');

class Validate {
  checkAmount(amount) {
    const AMOUNT = Number(amount);
    if (AMOUNT % LOTTO.PRICE === 0) {
      return AMOUNT / LOTTO.PRICE;
    } else {
      throw new Error(ERROR.AMOUNT);
    }
  }

  checkWinningNumber(number) {
    const NUMBER_ARRAY = this.getWinningNumberArray(number);
    if (NUMBER_ARRAY.length !== LOTTO.NUMBER_SELECT) {
      throw new Error(ERROR.SELECT);
    }
    for (let i = 0; i < NUMBER_ARRAY.length; i++) {
      const NUMBER = number[i];
      if (!this.checkNumber(NUMBER)) {
        throw new Error(ERROR.NUMBER);
      }
      return NUMBER_ARRAY;
    }
  }

  getWinningNumberArray(number) {
    const WINNING_NUMBER_ARRAY = number
      .replace(/ /gi, '')
      .split(',')
      .map((num) => Number(num));
    return WINNING_NUMBER_ARRAY;
  }

  checkBonusNumber(number, winning) {
    const NUMBER = Number(number);
    if (!this.checkNumber(NUMBER)) {
      throw new Error(ERROR.NUMBER);
    }
    if (winning.includes(NUMBER)) {
      throw new Error(ERROR.BONUS);
    }
    return NUMBER;
  }

  checkNumber(number) {
    if (
      isNaN(number) ||
      number < LOTTO.NUMBER_START ||
      number > LOTTO.NUMBER_END
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Validate;

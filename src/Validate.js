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
    const NUMBER_ARRAY = number
      .replace(/ /gi, '')
      .split(',')
      .map((num) => Number(num));
    const NUMBER_LENGTH = NUMBER_ARRAY.length;
    for (let i = 0; i < NUMBER_LENGTH; i++) {
      const NUMBER = number[i];
      if (
        isNaN(NUMBER) ||
        NUMBER < LOTTO.NUMBER_START ||
        NUMBER > LOTTO.NUMBER_END
      ) {
        throw new Error(ERROR.NUMBER);
      } else if (NUMBER_LENGTH !== LOTTO.NUMBER_SELECT) {
        throw new Error(ERROR.SELECT);
      } else {
        return NUMBER_ARRAY;
      }
    }
  }

  checkBonusNumber(number, winning) {
    const NUMBER = Number(number);
    if (
      isNaN(NUMBER) ||
      NUMBER < LOTTO.NUMBER_START ||
      NUMBER > LOTTO.NUMBER_END ||
      winning.includes(NUMBER)
    ) {
      throw new Error(ERROR.NUMBER);
    } else {
      return NUMBER;
    }
  }
}

module.exports = Validate;

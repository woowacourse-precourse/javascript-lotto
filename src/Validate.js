const { LOTTO, ERROR } = require('./Constants');

class Validate {
  checkAmount(amount) {
    const AMOUNT = Number(amount);
    // 로또 금액으로 나누어 떨어지는가?
    if (AMOUNT % LOTTO.PRICE === 0) {
      return AMOUNT / LOTTO.PRICE;
    }

    throw new Error(ERROR.AMOUNT);
  }

  checkWinningNumber(number) {
    const NUMBER_ARRAY = this.getWinningNumberArray(number);
    // 숫자 6개가 맞는가?
    if (NUMBER_ARRAY.length !== LOTTO.NUMBER_SELECT) {
      throw new Error(ERROR.SELECT);
    }
    for (let i = 0; i < NUMBER_ARRAY.length; i++) {
      const NUMBER = NUMBER_ARRAY[i];
      // 1~45 사이의 숫자인가?
      if (!this.checkNumber(NUMBER)) {
        throw new Error(ERROR.NUMBER);
      }
    }
    return NUMBER_ARRAY;
  }

  getWinningNumberArray(number) {
    return number
      .replace(/ /gi, '')
      .split(',')
      .map((num) => Number(num));
  }

  checkBonusNumber(number, winning) {
    const NUMBER = Number(number);
    // 1~45 사이의 숫자인가?
    if (!this.checkNumber(NUMBER)) {
      throw new Error(ERROR.NUMBER);
    }
    // 당첨 번호에 포함된 숫자인가?
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
    }

    return true;
  }
}

module.exports = Validate;

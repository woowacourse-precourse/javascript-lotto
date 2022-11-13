const { Console } = require('@woowacourse/mission-utils');
const { PHRASE, ERROR } = require('./constants');
const Lotto = require('./Lotto');

class DrawMachine {
  darwWinningNumber() {
    Console.readLine(PHRASE.WINNING_NUMBER, (input) => {
      this.validateWinningNumber(input);
      this.drawBonusNumber();
    });
  }

  validateWinningNumber(input) {
    const inputNumberArray = input.split(',');
    if (inputNumberArray) Lotto.validate(inputNumberArray);
    else throw new Error(ERROR.WINNING_NUMBER);
  }

  drawBonusNumber() {
    Console.readLine(PHRASE.BONUS_NUMBER, (input) => {
      this.validateBonusNumber(input);
    });
  }

  validateBonusNumber(input) {
    if (isNaN(input)) throw new Error(ERROR.BONUS_NUMBER);
    if (input < LOTTO.MIN_NUMBER || input > LOTTO.MAX_NUMBER)
      throw new Error(ERROR.LOTTO_NUMBER_RANGE);
  }
}

module.exports = DrawMachine;

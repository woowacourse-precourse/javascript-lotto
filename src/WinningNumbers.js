const { Console } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR } = require('./Constants');

class WinningNumbers {
  winning;
  bonus;

  constructor() {
    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.readLine(MESSAGE.WINNING_NUMBER, (number) => {
      const NUMBER = number.replace(/ /gi, '').split(',');
      if (this.checkWinningNumber(NUMBER)) {
        this.winning = NUMBER;
        this.getBonusNumber();
      } else {
        throw new Error(ERROR.NUMBER);
      }
    });
  }

  checkWinningNumber(number) {
    const NUMBER_LENGTH = number.length;
    for (let i = 0; i < NUMBER_LENGTH; i++) {
      const NUMBER = Number(number[i]);
      if (
        NUMBER_LENGTH !== LOTTO.NUMBER_SELECT ||
        isNaN(NUMBER) ||
        NUMBER < LOTTO.NUMBER_START ||
        NUMBER > LOTTO.NUMBER_END
      ) {
        return false;
      } else {
        return true;
      }
    }
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (number) => {
      if (this.checkBonusNumber(number)) {
        this.bonus = number;
      } else {
        throw new Error(ERROR.NUMBER);
      }
    });
  }

  checkBonusNumber(number) {
    const NUMBER = Number(number);
    if (
      isNaN(NUMBER) ||
      NUMBER < LOTTO.NUMBER_START ||
      NUMBER > LOTTO.NUMBER_END ||
      this.winning.includes(NUMBER)
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = WinningNumbers;

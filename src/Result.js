const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class Result {
  constructor() {}

  drawWinningNumber() {
    Console.readLine(`\n${MESSAGE.ENTER_WINNING_NUMBER}\n`, (inputStr) => {
      const lotto = new Lotto(inputStr);
      this.drawBonusNumber(lotto);
    });
  }

  drawBonusNumber(lotto) {
    Console.readLine(`\n${MESSAGE.ENTER_BONUS_NUMBER}\n`, (inputStr) => {
      const bonus = new Bonus(inputStr, lotto);
    });
  }
}

module.exports = Result;

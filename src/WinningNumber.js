const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { WINNING_NUMBER_MESSAGE, BONUS_NUMBER_MESSAGE } = require('./Constants');

class WinningNumber {
  getLottoNumber() {
    Console.readLine(WINNING_NUMBER_MESSAGE, (winningNumber) => {
      this.winningNumber = winningNumber
        .split(',')
        .map((split) => Number(split));
      return this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(BONUS_NUMBER_MESSAGE, (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      return this.bonusNumber;
    });
  }
}

const winningNumber = new WinningNumber();
exports.winningNumber = winningNumber;

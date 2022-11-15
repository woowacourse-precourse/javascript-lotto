const { Console } = require('@woowacourse/mission-utils');
const { PROCESS_MESSAGE } = require('./constants/Message');
const Validation = require('./Validation');

class Draw {
  winning() {
    Console.readLine(PROCESS_MESSAGE.INPUT_WINNING_NUMBER, (inputValue) => {
      this.winningInput = inputValue;
      Console.close();
    });
    return this.winningInput;
  }

  bonus() {
    Console.readLine(PROCESS_MESSAGE.INPUT_BONUS_NUMBER, (inputValue) => {
      Console.close();
      this.bonusInput = inputValue;
    });
    return this.bonusInput;
  }
}

module.exports = Draw;
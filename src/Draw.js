const { Console } = require('@woowacourse/mission-utils');
const { PROCESS_MESSAGE } = require('./constants/Message');
const Validation = require('./Validation');

class Draw {
  winning() {
    Console.readLine(PROCESS_MESSAGE.INPUT_WINNING_NUMBER, (inputValue) => {
      new Validation().winningInputValue(inputValue);
      this.winningNumbers = inputValue.split(',').map((item) => Number(item));
      Console.close();
      this.bonus();
      this.totalNumbers = [...this.winningNumbers, this.bonusNumber];
    });
    return this.totalNumbers;
  }

  bonus() {
    Console.readLine(PROCESS_MESSAGE.INPUT_BONUS_NUMBER, (inputValue) => {
      new Validation().bonusInputValue(this.winningNumbers, inputValue);
      Console.close();
      this.bonusNumber = Number(inputValue);
    });
  }
}

module.exports = Draw;
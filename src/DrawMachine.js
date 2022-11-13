const { Console } = require('@woowacourse/mission-utils');
const { PHRASE, ERROR } = require('./constants');
const Lotto = require('./Lotto');

class DrawMachine {
  darwWinningNumber() {
    Console.readLine(PHRASE.WINNING_NUMBER, (input) => {
      this.validate(input);
    });
  }

  validate(input) {
    const inputNumberArray = input.split(',');
    if (inputNumberArray) Lotto.validate(inputNumberArray);
    else throw new Error(ERROR.WINNING_NUMBER);
  }
}

module.exports = DrawMachine;

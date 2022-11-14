const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const Lotto = require('./Lotto');

class Result {
  constructor() {}

  draw() {}

  drawWinningNumber() {
    Console.readLine(`\n${MESSAGE.ENTER_WINNING_NUMBER}\n`, (inputStr) => {
      const lotto = new Lotto(inputStr);
    });
  }
}

module.exports = Result;

const { Console } = require('@woowacourse/mission-utils');
const { SPLITTER } = require('./settings');
const { WINNING } = require('./Message');

class Draw {
  static winning;

  static getWinningNumbers() {
    Console.readLine(WINNING, (answer) => {
      answer = answer.replace(/ /g, '');

      const winning = answer.split(SPLITTER).map((number) => Number(number));
      Draw.winning = winning;
    });
  }
}

module.exports = Draw;

const { Console } = require('@woowacourse/mission-utils');
const { SPLITTER } = require('./settings');
const { WINNING, BONUS } = require('./Message');

class Draw {
  static winning;
  static bonus;

  static getWinningNumbers(callback) {
    Console.readLine(WINNING, (answer) => {
      answer = answer.replace(/ /g, '');

      const winning = answer.split(SPLITTER).map((number) => Number(number));
      Draw.winning = winning;

      Draw.#getBonusNumber(callback);
    });
  }

  static #getBonusNumber(callback) {
    Console.readLine(BONUS, (answer) => {
      const bonus = Number(answer);
      Draw.bonus = bonus;

      callback(Draw);
    });
  }
}

module.exports = Draw;

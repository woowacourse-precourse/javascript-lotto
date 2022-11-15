const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_LENGTH, SPLITTER } = require('./settings');
const { WINNING, BONUS } = require('./Message');
const Lotto = require('./Lotto');
const ErrorHandling = require('./ErrorHandling');

class Draw {
  static winning;
  static bonus;

  static getWinningNumbers(callback) {
    Console.readLine(WINNING, (answer) => {
      answer = answer.replace(/ /g, '');
      Draw.validateWinningInput(answer);

      const winning = answer.split(SPLITTER).map((number) => Number(number));
      Draw.winning = Draw.validateWinningNumbers(winning);

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

  static validateWinningInput(input) {
    const regExp = new RegExp(`^(\\d+${SPLITTER}){${LOTTO_LENGTH - 1}}\\d+$`);
    const isInvalidForm = !regExp.test(input);

    ErrorHandling.handleException(
      isInvalidForm,
      `당첨 번호는 쉼표(,)를 기준으로 구분되는 숫자 ${LOTTO_LENGTH}개여야 합니다. (ex. 1,2,3,4,5,6)`,
    );
  }

  static validateWinningNumbers(numbers) {
    Lotto.validate(numbers, '당첨 번호는');

    return numbers;
  }
}

module.exports = Draw;

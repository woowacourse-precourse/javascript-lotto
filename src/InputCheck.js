const { LOTTO_TICKET, ERROR_MESSAGE, LOTTO_NUMBER } = require('./constant');
const MissionUtils = require('@woowacourse/mission-utils');
const Match = require('./Matcher');
const Console = MissionUtils.Console;

class InputCheck {
  moneyValidate(money) {
    if (money % LOTTO_TICKET.ONE_PRICE !== 0 || money === 0) {
      Console.close();
      throw new Error(ERROR_MESSAGE.INPUT_ONE_THOUSAND_WON_UNIT);
    }
  }

  bonusValidate(bonus) {
    const checkNum = /\d/.test(bonus) === false || typeof bonus !== 'number';
    const checkInteger = Number.isInteger(bonus);
    const checkRange =
      bonus < LOTTO_NUMBER.MIN_RANGE || bonus > LOTTO_NUMBER.MAX_RANGE;

    if (checkNum || checkRange || !checkInteger) {
      throw new Error(ERROR_MESSAGE.INPUT_BONUS_NUMBER);
    }
    if (Match.winningNumber.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.INPUT_NOT_DUPLICATE_WINNING_NUMBER);
    }
  }
}

const INPUTCHECK = new InputCheck();

module.exports = INPUTCHECK;

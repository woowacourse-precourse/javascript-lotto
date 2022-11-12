// const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require('../utils/Constants');

class Bonus {
  #bonus;

  constructor(bonus, answerNumber) {
    this.#bonus = bonus;
    this.checkNumber(this.#bonus, answerNumber);
  };

  checkNumber(bonus, answerNumber) {
    const answerNumberList = answerNumber.split(',');
    this.checkWords(bonus);
    this.checkRange(bonus);
    this.checkSameNumber(bonus, answerNumberList);
  };

  checkRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_BONUS_RANGE}`);
    };
  };

  checkSameNumber(bonus, answerNumberList) {
    if (answerNumberList.includes(bonus)) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_BONUS_SAME_ANSWER}`);
    };
  };

  checkWords(bonus) {
    if (bonus.match(/[^0-9]/g) !== null) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_BONUS_WORDS}`);
    };
  };
};

module.exports = Bonus;

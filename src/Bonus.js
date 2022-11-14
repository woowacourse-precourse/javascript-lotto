const { ERROR } = require('./utils/Constants');

class Bonus {
  #bonus;

  constructor(bonus, answerNumber) {
    this.#bonus = bonus;
    this.checkNumber(this.#bonus, answerNumber);
  };

  checkNumber(bonus, answerNumber) {
    this.checkWords(bonus);
    this.checkRange(Number(bonus));
    this.checkSameNumber(Number(bonus), answerNumber);
  };

  checkRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error(`${ERROR.INVALID_BONUS_RANGE}`);
    };
  };

  checkSameNumber(bonus, answerNumber) {
    if (answerNumber.includes(bonus)) {
      throw new Error(`${ERROR.INVALID_BONUS_SAME_ANSWER}`);
    };
  };

  checkWords(bonus) {
    if ((/[\D]/g).test(bonus)) {
      throw new Error(`${ERROR.INVALID_BONUS_WORDS}`);
    };
  };
};

module.exports = Bonus;

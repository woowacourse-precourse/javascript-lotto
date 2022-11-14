const { LOTTO, INPUT_MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const utils = require('./utils');

class Bonus {
  #bonus;

  constructor(bonus) {
    this.getBonusNumber();
    this.validate(bonus);
    this.#bonus = bonus;
  }

  getBonusNumber() {
    utils.getInput(INPUT_MESSAGE.LOTTO_NUMBERS, (input) => {
      this.bonus = +input;
    });
  }

  validate(bonus) {
    // if (numbers.some((number, index, array) => array.indexOf(number) !== index)) {
    //   throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
    // }
    if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
    }
  }
}

module.exports = Bonus;

const { MIN_NUMBER, MAX_NUMBER } = require("../utils/constants");
const Lotto = require("./Lotto");
const { ERROR } = require("../utils/messages");

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validateBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonus(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
      throw new Error(ERROR.BONUS_NUMBER_RANGE);
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningLotto;

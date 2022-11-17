const Lotto = require("./Lotto");
const { CONSTANT, ERROR_MESSAGE, WINMESSAGE } = require("../src/Utils");

class LottoAnswer extends Lotto {
  #bonus;

  constructor(numbers) {
    super(numbers);
    this.#bonus = null;
  }

  validateBonus(bonus) {
    if (isNaN(bonus)) throw new Error(ERROR_MESSAGE.LOTTO_BONUS.NAN);
    if (this.numbers.includes(bonus))
      throw new Error(ERROR_MESSAGE.LOTTO_BONUS.DUPLICATE);
    if (bonus < CONSTANT.LOTTO_RANGE_START || bonus > CONSTANT.LOTTO_RANGE_END)
      throw new Error(ERROR_MESSAGE.LOTTO_BONUS.OVER_RANGE);
    if (!Number.isInteger(bonus)) throw new Error(ERROR_MESSAGE.LOTTO_BONUS.NOT_INTEGER);
  }

  set bonus(bonus) {
    this.validateBonus(bonus);
    this.#bonus = bonus;
  }

  get bonus() {
    if (this.#bonus !== null) return this.#bonus;
  }

  compare(candidate) {
    let match = candidate.filter((number) => this.numbers.includes(number)).length;
    switch (match) {
      case 3:
        return WINMESSAGE.FIFTH;
      case 4:
        return WINMESSAGE.FOURTH;
      case 5: {
        if (candidate.includes(this.#bonus)) return WINMESSAGE.SECOND;
        return WINMESSAGE.THIRD;
      }
      case 6:
        return WINMESSAGE.FIRST;
    }
  }
}

module.exports = LottoAnswer;

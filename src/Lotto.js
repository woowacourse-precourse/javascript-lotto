const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_LENGTH, LOTTO_RANGE } = require('./constants');
const { ERROR } = require('./messages');
const { hasDuplicate, isNumber } = require('./utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      throw new Error(ERROR.LOTTO.VALID_AMOUNT);

    if (hasDuplicate(numbers)) throw new Error(ERROR.LOTTO.VALID_UNIQUE);

    numbers.forEach((number) => this.validateNumber(number));
  }

  validateNumber(number) {
    if (isNumber(number)) throw new TypeError(ERROR.LOTTO.VALID_TYPE);

    if (+number < LOTTO_RANGE.MIN || +number > LOTTO_RANGE.MAX)
      throw new RangeError(ERROR.LOTTO.VALID_RANGE);
  }

  getMatchedCount(lotto) {
    return lotto.filter((number) => this.#numbers.includes(number)).length;
  }

  isValidBonusNumber(bonus) {
    if (this.#numbers.includes(+bonus))
      throw new Error(ERROR.LOTTO.VALID_BONUS);

    this.validateNumber(bonus);
  }

  static issueLotto = () => {
    return Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.MIN,
      LOTTO_RANGE.MAX,
      LOTTO_LENGTH
    );
  };
}

module.exports = Lotto;

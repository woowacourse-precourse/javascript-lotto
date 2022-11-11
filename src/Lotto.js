const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      const NUMBERS_IN_RANGE = numbers.filter((el) => Number(el) >= 1 && Number(el) <= 45);

      if (numbers.length !== 6) throw new Error(Messages.SIX_NUMBERS_MESSAGES);
      if (numbers.length !== new Set(numbers).size) throw new Error(Messages.NOT_DUPLICATE_MESSAGE);
      if (numbers.length !== NUMBERS_IN_RANGE.length) {
        throw new Error(Messages.NUMBERS_IN_RANGE_MESSAGE);
      }
    }
  }
}

module.exports = Lotto;

const { Console } = require('@woowacourse/mission-utils');
const { GAME, RULE, ERROR } = require('./modules/Constant');
const validateNumber = require('./modules/validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== GAME.COUNT) {
      throw new Error(`${ERROR.COMMON} ${ERROR.NOT_PROPER_LENGTH}`);
    } else if (new Set(numbers).size < GAME.COUNT) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_LOTTO}`);
    }
    numbers.forEach((number) => {
      if (!validateNumber(number) || number < GAME.START || number > GAME.END) {
        throw new Error(`${ERROR.COMMON} ${ERROR.MUST_IN_RANGE}`);
      }
    });
  }

  publishLotto() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  calculateResult(winNumbers, bonus) {
    const intersection = this.#numbers.filter((number) => winNumbers.includes(number));
    const duplicateCount = intersection.length;
    if (duplicateCount === 5 && this.#numbers.includes(bonus)) {
      return 'second'; // TODO: 상수처리 고민
    }
    return RULE[duplicateCount];
  }
}

module.exports = Lotto;

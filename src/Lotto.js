const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE, RULE, PRIZE_BOARD, ERROR } = require('./modules/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR.COMMON} ${ERROR.NOT_PROPER_LENGTH}`);
    } else if (new Set(numbers).size < 6) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_LOTTO}`);
    }
    const numberReg = /^[0-9]*$/;
    numbers.forEach((number) => {
      if (!numberReg.test(number) || number < 1 || number > 45) {
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
    return RULE[duplicateCount]; // TODO: undefined 핸들링
  }
}

module.exports = Lotto;

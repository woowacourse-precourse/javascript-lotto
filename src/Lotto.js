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
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  publishLotto() {
    Console.print(this.#numbers);
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

const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, LOTTO } = require('./Constants');

const { Console } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  /**
   * 로또 번호 배열이 주어지면 에러를 체크합니다.
   * @param {Array<number>} numbers - 로또 배열
   */
  validate(numbers) {
    const numSet = new Set(numbers);
    if (numbers.length !== 6) throw new Error(MESSAGE.ERROR_SIX_ELEMENT);
    if (numSet.size !== 6) throw new Error(MESSAGE.ERROR_NO_DUPLICATE);

    numbers.forEach((num) => {
      if (!Number.isInteger(num)) throw new Error(MESSAGE.ERROR_NO_INTEGER);
      if (num < LOTTO.START_NUMBER || num > LOTTO.END_NUMBER) {
        throw new Error(MESSAGE.ERROR_OUT_OF_RANGE);
      }
    });
  }

  /**
   * 로또 하나의 번호를 반환합니다.
   * @return {Array<number>} numbers - 로또 배열
   */
  getNums() {
    return this.#numbers;
  }

  /**
   * 로또 하나의 번호를 출력합니다.
   */
  printLotto() {
    const str = this.#numbers.join(', ');
    Console.print(`[${str}]`);
  }
}

module.exports = Lotto;

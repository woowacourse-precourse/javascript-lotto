const { USER_OUTPUT_PHRASE } = require('../src/config.js');
const { Console } = require('@woowacourse/mission-utils');

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

  print() {
    Console.print(
      `${USER_OUTPUT_PHRASE.LOTTO_START}${this.#numbers.join(USER_OUTPUT_PHRASE.LOTTO_DELIMITER)}${
        USER_OUTPUT_PHRASE.LOTTO_END
      }`,
    );
  }
}

const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
lotto.print();

module.exports = Lotto;

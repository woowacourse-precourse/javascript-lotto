const { Random } = require('@woowacourse/mission-utils');

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

  generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers;
  }
}

module.exports = Lotto;

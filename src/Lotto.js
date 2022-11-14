const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      Console.close();
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
